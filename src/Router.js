import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Colors, Icons } from "@common";
import { TabBarItem } from "@components";
import HomeScreen from "./navigations/HomeScreen";
import CartScreen from "./navigations/CartScreen";
import ProfileScreen from "./navigations/ProfileScreen";
import SearchScreen from "./navigations/SearchScreen";
import WishlistScreen from "./navigations/WishlistScreen";
import Constants from "./common/Constants";
import ProductDetailScreen from "./navigations/ProductDetailScreen";
import ProductsByCategoryScreen from "./navigations/ProductsByCategoryScreen";
import SignInScreen from "./navigations/SignInScreen";
import SignUpScreen from "./navigations/SignUpScreen";
import ForgotPassScreen from "./navigations/ForgotPassScreen";
import ShippingAddressScreen from "./navigations/ShippingAddressScreen";
import ShippingInfoScreen from "./navigations/ShippingInfoScreen";
import PaymentInfoScreen from "./navigations/PaymentInfoScreen";

const stackNavConfig = {
  mode: "card",
  headerBackTitleVisible: false,
};

const homeTabScreens = {};
homeTabScreens[Constants.Screen.Home] = { screen: HomeScreen };
homeTabScreens[Constants.Screen.ProductsByCategory] = { screen: ProductsByCategoryScreen };
homeTabScreens[Constants.Screen.ProductDetail] = { screen: ProductDetailScreen };
const homeStack = createStackNavigator(homeTabScreens, stackNavConfig);

const cartTabeScreens = {};
cartTabeScreens[Constants.Screen.Cart] = { screen: CartScreen };
cartTabeScreens[Constants.Screen.ShippingAddress] = { screen: ShippingAddressScreen };
cartTabeScreens[Constants.Screen.ShippingInfo] = { screen: ShippingInfoScreen };
cartTabeScreens[Constants.Screen.PaymentInfo] = { screen: PaymentInfoScreen };
const cartStack = createStackNavigator(cartTabeScreens, stackNavConfig);

const profileTabScreens = {};
profileTabScreens[Constants.Screen.Profile] = { screen: ProfileScreen };
profileTabScreens[Constants.Screen.SignIn] = { screen: SignInScreen };
profileTabScreens[Constants.Screen.SignUp] = { screen: SignUpScreen };
profileTabScreens[Constants.Screen.ForgotPass] = { screen: ForgotPassScreen };
const profileStack = createStackNavigator(profileTabScreens, stackNavConfig);

const searchTabScreens = {};
searchTabScreens[Constants.Screen.Search] = { screen: SearchScreen };
searchTabScreens[Constants.Screen.ProductDetail] = { screen: ProductDetailScreen };
const searchStack = createStackNavigator(searchTabScreens, stackNavConfig);

const wishlistTabScreens = {};
wishlistTabScreens[Constants.Screen.Wishlist] = { screen: WishlistScreen };
const wishlistStack = createStackNavigator(wishlistTabScreens, stackNavConfig);

const screens = {};

const tabScreens = {};
tabScreens[Constants.Screen.Home] = { screen: homeStack };
tabScreens[Constants.Screen.Search] = { screen: searchStack };
tabScreens[Constants.Screen.Wishlist] = { screen: wishlistStack };
tabScreens[Constants.Screen.Cart] = { screen: cartStack };
tabScreens[Constants.Screen.Profile] = { screen: profileStack };

const bottomStack = createBottomTabNavigator(tabScreens, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      var icon = null;
      switch (routeName) {
        case Constants.Screen.Home:
          icon = Icons.logoIcon;
          break;
        case Constants.Screen.Search:
          icon = Icons.searchIcon;
          break;
        case Constants.Screen.Cart:
          icon = Icons.cartIcon;
          break;
        case Constants.Screen.Wishlist:
          icon = Icons.wishlistIcon;
          break;
        case Constants.Screen.Profile:
          icon = Icons.profileIcon;
          break;
        default:
          return null;
      }
      return (
        <TabBarItem icon={icon} tintColor={tintColor} routeName={routeName} />
      );
    }
  }),
  tabBarOptions: {
    showLabel: false,
    activeTintColor: Colors.AppColor
  }
});

export default createStackNavigator(
  {
    ...screens,
    default: {
      screen: bottomStack
    }
  },
  {
    headerMode: "none"
  }
);
