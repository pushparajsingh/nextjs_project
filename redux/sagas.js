import { all } from "redux-saga/effects";
import authSagas from "./Auth/Auth.saga";

export default function* rootSagas() {
  yield all([authSagas()]);
}
