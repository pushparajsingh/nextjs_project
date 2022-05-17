import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers.js";
import rootSagas from "./sagas.js";

import "regenerator-runtime/runtime";

const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const Store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);
export default Store;
