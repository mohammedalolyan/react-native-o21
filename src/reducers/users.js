import * as ActionTypes from "@actions/ActionTypes";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_UP_PENDING:
    case ActionTypes.SIGN_IN_PENDING:
    case ActionTypes.FORGOT_PASS_PENDING:
    case ActionTypes.GET_CUSTOMER_INFO_PENDING:
      {
        return {
          ...state,
          type: action.type,
          message: ""
        };
      }
    case ActionTypes.SIGN_UP_FAILED:
    case ActionTypes.SIGN_IN_FAILED:
    case ActionTypes.FORGOT_PASS_FAILED:
    case ActionTypes.GET_CUSTOMER_INFO_FAIL:
      {
        return {
          ...state,
          type: action.type,
          message: action.message
        };
      }
    case ActionTypes.SIGN_IN_SUCCESS:
      {
        return {
          ...state,
          type: action.type,
          token: action.token,
          customerInfo: action.customerInfo
        }
      }
    case ActionTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        type: action.type,
        message: ''
      };
    }

    case ActionTypes.LOGOUT: {
      return {};
    }
    case ActionTypes.FORGOT_PASS_SUCCESS: {
      return {
        ...state,
        type: action.type,
        message: action.message
      };
    }
    case ActionTypes.GET_CUSTOMER_INFO_SUCCESS:
      {
        return {
          ...state,
          type: action.type,
          message: ""
        }
      }
    default:
      return state;
  }
};
