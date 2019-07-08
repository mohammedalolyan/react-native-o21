import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
import categoiresReducer from "./categories";
import productsReducer from "./products";
import cartsReducer from "./carts";
import usersReducer from "./users";

const config = {
  key: "root",
  storage,
  whitelist: ["usersReducer", "cartsReducer"]
};

export default persistCombineReducers(config, {
  categoiresReducer,
  productsReducer,
  cartsReducer,
  usersReducer
});
