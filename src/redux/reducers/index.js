// Combine Reducers

import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducer = combineReducers({
  allproducts: productReducer,
  product: selectedProductReducer,
});

export default reducer;
