import * as ActionTypes from "@actions/ActionTypes"
import { Config } from '@common'
import { ItemLoading } from "../components";

export default function base(state = {}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS_PENDING: {
      return {
        ...state,
        type: action.type,
        message: "",
        products: []
      };
    }
    case ActionTypes.FETCH_PRODUCTS_FAILED: {
      return {
        ...state,
        type: action.type,
        message: action.message
      };
    }
    case ActionTypes.FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        type: action.type,
        products: action.products,
        isMore: action.products.length == Config.Api.Limit
      }
    }
    case ActionTypes.LOAD_MORE_PRODUCT:
      {
        return {
          ...state,
          type: action.type,
          products: state.products.concat(action.products),
          isMore: action.products.length == Config.Api.Limit
        }
      }
    default:
      return state;
  }
}
