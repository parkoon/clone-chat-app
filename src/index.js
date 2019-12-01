import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import "./index.css";

// store
import configureStore from "./store/configureStore";

// reducer
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
