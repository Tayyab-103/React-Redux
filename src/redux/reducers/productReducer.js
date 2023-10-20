import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [
  ],
};
// export const productReducer = (state, action) => {};
// Destructuring below the function:
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state, products:payload};
    default:
      return state;
  }
};
export const selectedProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      // what ever state we have and destructure payload
      return {...state, ...payload};
    default:
      return state;
  }
};
