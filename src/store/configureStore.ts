import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const reducer = combineReducers({ ...rootReducer });
  const middleware = [sagaMiddleware];

  const store = configureStore({ reducer, middleware });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureAppStore;
