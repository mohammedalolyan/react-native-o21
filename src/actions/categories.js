import * as ActionTypes from "./ActionTypes";
import * as Services from '@services'

export const getCategories = () => {
  return dispatch => {
    dispatch({ type: ActionTypes.FETCH_CATEGORIES_PENDING });
    Services.getCategories()
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_CATEGORIES_SUCCESS, categories: response })
      })
      .catch((message) => {
        dispatch({ type: ActionTypes.FETCH_CATEGORIES_FAILED, message })
      })
  };
};

export const getSubCategories = (parentId) => {
  return (dispatch, getState) => {
    dispatch({ type: ActionTypes.GET_SUBCATEGORIES_PENDING })
    Services.getSubCategories(parentId)
      .then((subCategories) => {
        console.log(subCategories)
        dispatch({ type: ActionTypes.GET_SUBCATEGORIES_SUCCESS, subCategories })
      })
      .catch((message) => {
        dispatch({ type: ActionTypes.GET_SUBCATEGORIES_FAIL, message })
      })
  }
}

export const selectSubCategory = (item) => {
  return { type: ActionTypes.SELECT_SUB_CATEGORY, item }
}

export const setCategory = item => {
  return { type: ActionTypes.SELECTED_CATEGORY, selectedCategory: item };
};

