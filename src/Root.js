import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddlleware from "redux-thunk";
import reducers from "@reducers";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import App from './App'

const middleware = [thunkMiddlleware];
const store = compose(applyMiddleware(...middleware))(createStore)(reducers);
let persistor = persistStore(store);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;
