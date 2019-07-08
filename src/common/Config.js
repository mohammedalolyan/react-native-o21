import Dashbaord from "./Dashboard";

const Config = {
  SiteURL: {
    baseURL: "https://www.ooreed.com",
    consumerKey: "ck_cca656c8599d35e3434919bc48b430a41fcbcb6b",
    consumerSecret: "cs_0e6d938c1799b85ec41efae0930154bec8e2fb8e"
  },
  TopTextValue: {
    Enabled: Dashbaord.enableTopText,
    Value: "FREE SHIPPING ON ORDERS OVER $50+ !"
  },
  currencySymbol: "$",
  Api: {
    Limit: 10
  }
};

export default Config;
