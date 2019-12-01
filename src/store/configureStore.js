import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer";

export default function() {
  const middlewares = [];

  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middlewares))
  );

  return store;
}
