import * as ActionTypes from "@actions/ActionTypes";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      var carts = state.carts;
      var reload = state.reload;
      if (carts == undefined) {
        carts = [];
        reload = false;
      }
      var index = _.findIndex(carts, item => item.id == action.product.id);
      if (index >= 0) {
        var product = carts[index];
        product.qty = product.qty + 1;
      } else {
        var product = action.product;
        product.qty = 1;
        carts.push(product);
      }
      return {
        ...state,
        carts,
        reload: !reload
      };
    }

    case ActionTypes.DELETE_FROM_CART: {
      var carts = state.carts;
      var reload = state.reload;

      var index = _.findIndex(carts, item => item.id == action.product.id);
      if (index >= 0) {
        var product = carts[index];
        if (product.qty > 1) {
          product.qty = product.qty - 1;
        } else {
          carts.splice(index, 1);
        }
      }
      return {
        ...state,
        carts,
        reload: !reload
      };
    }

    case ActionTypes.DELETE_ALL_CART: {
      var reload = state.reload;

      return {
        ...state,
        carts: [],
        reload: !reload
      };
    }
    case ActionTypes.SET_SHIPPING_ADDRESS: {
      return {
        ...state,
        shippingAddress: action.address
      };
    }
    case ActionTypes.SET_SHIPPING_METHOD: {
      return {
        ...state,
        shippingMethod: action.shippingMethod
      };
    }
    case ActionTypes.GET_SHIPPING_METHODS_PENDING:
    case ActionTypes.GET_PAYMENT_METHODS_PENDING:
    case ActionTypes.CREATE_ORDER_PENDING: {
      return {
        ...state,
        type: action.type,
        message: ""
      };
    }
    case ActionTypes.GET_SHIPPING_METHODS_FAILED:
    case ActionTypes.GET_PAYMENT_METHODS_FAILED:
    case ActionTypes.CREATE_ORDER_FAILED: {
      return {
        ...state,
        type: action.type,
        message: action.message
      };
    }
    case ActionTypes.GET_SHIPPING_METHODS_SUCCESS: {
      return {
        ...state,
        type: action.type,
        shippingMethods: action.shippingMethods
      };
    }
    case ActionTypes.GET_PAYMENT_METHODS_SUCCESS: {
      return {
        ...state,
        type: action.type,
        paymentMethods: action.paymentMethods
      };
    }
    case ActionTypes.CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        type: action.type,
        carts: []
      };
    }
    case ActionTypes.ADD_WISHLIST:
      {
        let wishList = state.wishList
        if (wishList && wishList.length > 0) {
          var index = _.findIndex(wishList, item => item.id == action.product.id);
          let isExists = index >= 0
          if (!isExists) {
            wishList.push(action.product)
          }
        } else {
          wishList = [action.product]
        }
        return {
          ...state,
          type: action.type,
          wishList: wishList
        }
      }
    default:
      return state;
  }
};
