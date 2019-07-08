import { Dimensions } from "react-native";

const Constants = {
  Screen: {
    Home: "Home",
    Search: "Search",
    Wishlist: "Wishlist",
    Cart: "Cart",
    Profile: "Profile",
    Details: "Details",
    ProductDetail: "ProductDetail",
    ProductsByCategory: "ProductsByCategory",
    SignIn: "SignIn",
    SignUp: "SignUp",
    ForgotPass: "ForgotPass",
    ShippingAddress: "ShippingAddress",
    ShippingInfo: "ShippingInfo",
    PaymentInfo: "PaymentInfo"
  },
  ScreenSize: Dimensions.get("window"),
  EventEmitterName: {
    onSearch: 'onSearch',
    showToast: 'showToast'
  },
  FontSize: {
    superTiny: 9,
    tiny: 11,
    small: 13,
    medium: 15,
    big: 18,
    large: 20,
  },
};

export default Constants;
