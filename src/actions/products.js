import * as ActionTypes from "./ActionTypes";
import axios from "axios";
import { Config } from "@common";
import * as Services from '@services'

var URL = Config.SiteURL.baseURL;
const consumerKey = Config.SiteURL.consumerKey;
const consumerSecret = Config.SiteURL.consumerSecret;

export const getProducts = (categoryID, page) => {
  return (dispatch, getState) => {
    dispatch({ type: ActionTypes.FETCH_PRODUCTS_PENDING });
    Services.getProductByCategory(categoryID, page, Config.Api.Limit)
      .then((products) => {
        if (page == 1) {
          dispatch({ type: ActionTypes.FETCH_PRODUCTS_SUCCESS, products });
        } else {
          dispatch({ type: ActionTypes.LOAD_MORE_PRODUCT, products })
        }
      })
      .catch((message) => {
        dispatch({ type: ActionTypes.FETCH_PRODUCTS_FAILED, message })
      })
  };
};


export const getReviewsProduct = productId => {
  return (dispatch, getState) => {
    dispatch({ type: ActionTypes.FETCH_PRODUCTS_PENDING });
    var newURL = `${URL}/wp-json/wc/v2/products?category=${categoryID}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    axios
      .get(newURL)
      .then(response => {
        if (response.status == 200) {
          dispatch({
            type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
            products: response.data
          });
        }
      })
      .catch(error => {
        console.log("error found", error);
        dispatch({ type: ActionTypes.FETCH_PRODUCTS_FAILED });
      });
  };
};

export const search = (text, page) => {
  return (dispatch, getState) => {
    dispatch({ type: ActionTypes.FETCH_PRODUCTS_PENDING });
    Services.search(text, page, Config.Api.Limit)
      .then((products) => {
        if (page == 1) {
          dispatch({ type: ActionTypes.FETCH_PRODUCTS_SUCCESS, products });
        } else {
          dispatch({ type: ActionTypes.LOAD_MORE_PRODUCT, products })
        }
      })
      .catch((message) => {
        dispatch({ type: ActionTypes.FETCH_PRODUCTS_FAILED, message });
      })
  };
};

export const getAllProducts = () => {
  return (dispatch, getState) => {
    dispatch({ type: ActionTypes.FETCH_PRODUCTS_PENDING });
    var newURL = `${URL}/wp-json/wc/v2/products?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    axios
      .get(newURL)
      .then(response => {
        console.log(response.data);
        if (response.status == 200) {
          dispatch({
            type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
            products: response.data
          });
        }
      })
      .catch(error => {
        console.log("error found", error);
        dispatch({ type: ActionTypes.FETCH_PRODUCTS_FAILED });
      });
  };
};
