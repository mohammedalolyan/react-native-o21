import * as categoryActions from "./categories";
import * as productActions from "./products";
import * as cartActions from "./carts";
import * as userActions from "./users";

export const ActionCreators = Object.assign(
  {},
  categoryActions,
  productActions,
  cartActions,
  userActions
);
