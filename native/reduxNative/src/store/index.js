import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer()
    )
  : applyMiddleware(...middlewares);
const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
