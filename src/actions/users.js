import * as ActionTypes from "./ActionTypes";
import axios from "axios";
import { Config, Utils } from "@common";
import * as Services from '@services'

var URL = Config.SiteURL.baseURL;

export const getNonceRegister = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + `/api/get_nonce/?controller=user&method=register`)
      .then(response => {
        if (response.status == 200) {
          resolve(response.data.nonce);
        }
      })
      .catch(reject);
  });
};

export const signUp = (first_name, last_name, email, password) => {
  return dispatch => {
    dispatch({ type: ActionTypes.SIGN_UP_PENDING });
    Services.signUp(first_name, last_name, email, password)
      .then((response) => {
        dispatch({ type: ActionTypes.SIGN_UP_SUCCESS })
      })
      .catch((message) => {
        dispatch({ type: ActionTypes.SIGN_UP_FAILED, message })
      })
  };
};

export const signIn = (username, password) => {
  return (dispatch, getState) => {
    dispatch({ type: ActionTypes.SIGN_IN_PENDING });
    Services.signIn(username, password)
      .then((user) => {
        global.token = user.token
        Services.getCustomerInfo(token)
          .then((customerInfo) => {
            console.log(customerInfo)
            dispatch({ type: ActionTypes.SIGN_IN_SUCCESS, customerInfo, token: user.token })
          })
          .catch((message) => {
            dispatch({ type: ActionTypes.SIGN_IN_FAILED, message })
          })
      })
      .catch((message) => {
        dispatch({ type: ActionTypes.SIGN_IN_FAILED, message })
      })
  };
};


export const logout = () => {
  return { type: ActionTypes.LOGOUT };
};

export const forgotPass = username => {
  return dispatch => {
    dispatch({ type: ActionTypes.FORGOT_PASS_PENDING });
    axios
      .get(URL + `/api/user/retrieve_password?user_login=${username}`)
      .then(response => {
        if (response.status == 200) {
          if (response.data.error != undefined) {
            dispatch({
              type: ActionTypes.FORGOT_PASS_FAILED,
              message: response.data.error
            });
          } else {
            dispatch({
              type: ActionTypes.FORGOT_PASS_SUCCESS,
              message: response.data.msg
            });
          }
        }
      })
      .catch(error => {
        console.log("error found", error);
        dispatch({
          type: ActionTypes.FORGOT_PASS_FAILED,
          message: error.response.data.error
        });
      });
  };
};
