import * as ActionTypes from "./ActionTypes";
import axios from "axios";
import { Config } from "@common";
import * as Services from "@services";

var URL = Config.SiteURL.baseURL;
const consumerKey = Config.SiteURL.consumerKey;
const consumerSecret = Config.SiteURL.consumerSecret;

export const addProductToCart = product => {
  return { type: ActionTypes.ADD_TO_CART, product };
};

export const deleteFromCart = product => {
  return { type: ActionTypes.DELETE_FROM_CART, product };
};

export const deleteAll = product => {
  return { type: ActionTypes.DELETE_ALL_CART };
};

export const setShippingAddress = address => {
  return { type: ActionTypes.SET_SHIPPING_ADDRESS, address };
};

export const addWishList = product => {
  return { type: ActionTypes.ADD_WISHLIST, product };
};

export const getShippingMethods = countryCode => {
  return dispatch => {
    dispatch({ type: ActionTypes.GET_SHIPPING_METHODS_PENDING });
    Services.getShippingMethods(countryCode)
      .then(shippingMethods => {
        dispatch({
          type: ActionTypes.GET_SHIPPING_METHODS_SUCCESS,
          shippingMethods
        });
      })
      .catch(message => {
        dispatch({ type: ActionTypes.GET_SHIPPING_METHODS_FAILED, message });
      });
  };
};

export const setShippingMethod = shippingMethod => {
  return { type: ActionTypes.SET_SHIPPING_METHOD, shippingMethod };
};

export const getPaymentMethods = () => {
  return dispatch => {
    dispatch({ type: ActionTypes.GET_PAYMENT_METHODS_PENDING });
    Services.getPaymentMethods()
      .then(paymentMethods => {
        dispatch({
          type: ActionTypes.GET_PAYMENT_METHODS_SUCCESS,
          paymentMethods
        });
      })
      .catch(message => {
        dispatch({ type: ActionTypes.GET_PAYMENT_METHODS_FAILED, message });
      });
  };
};

export const createOrder = params => {
  return dispatch => {
    dispatch({ type: ActionTypes.CREATE_ORDER_PENDING });
    Services.createOrder(params)
      .then(response => {
        dispatch({ type: ActionTypes.CREATE_ORDER_SUCCESS });
      })
      .catch(message => {
        dispatch({ type: ActionTypes.CREATE_ORDER_FAILED, message });
      });
  };
};
