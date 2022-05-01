import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { actionTypes } from "./Auth.constant";
import { authError, authSuccess } from "./Auth.action";

function* authLogin() {
  try {
    yield put(authSuccess("data"));
  } catch (error) {
    yield put(authError(error));
  }
}

export default function* authSagas() {
  yield all([authLogin()]);
}
