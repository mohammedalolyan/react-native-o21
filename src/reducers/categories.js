import * as ActionTypes from "@actions/ActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GET_SUBCATEGORIES_PENDING:
    case ActionTypes.GET_PRODUCT_CATEGORY_PENDING:
    case ActionTypes.FETCH_CATEGORIES_PENDING:
      {
        return {
          ...state,
          message: '',
          type: action.type
        }
      }
    case ActionTypes.GET_SUBCATEGORIES_FAIL:
    case ActionTypes.GET_PRODUCT_CATEGORY_FAIL:
    case ActionTypes.FETCH_CATEGORIES_FAILED:
      {
        return {
          ...state,
          message: action.message,
          type: action.type
        }
      }
    case ActionTypes.GET_SUBCATEGORIES_SUCCESS:
      {
        return {
          ...state,
          message: '',
          type: action.type,
          subCategories: action.subCategories
        }
      }
    case ActionTypes.SELECT_SUB_CATEGORY:
      {

        return {
          ...state,
          subCategories: state.subCategories.map((item) => {
            if (item.id == action.item.id) {
              item.active = true
            } else {
              item.active = false
            }
            return item
          })
        }
      }
    case ActionTypes.FETCH_CATEGORIES_SUCCESS: {
      let productCount = 0
      action.categories.forEach(category => {
        productCount += category.count
      });
      return {
        ...state,
        categories: action.categories,
        type: action.type,
        productCount
      };
    }

    case ActionTypes.SELECTED_CATEGORY: {
      return {
        ...state,
        selectedCategory: action.selectedCategory
      };
    }

    default:
      return state;
  }
};
