import { actionTypes } from "./Client.constant";
import { call, put, takeLatest } from "redux-saga/effects";
import { clientSuccess, clientError } from "./Client.action";
import apiRoutes from "../ApiRoutes";
import Api from "../Api";

function* clientList() {
  try {
    const res = yield call(Api.get, apiRoutes.clientstetimonials);
    yield put(clientSuccess({ type: actionTypes.CLIENT_LIST, data: res?.data }));
  } catch (error) {
    yield put(clientError({ type: actionTypes.CLIENT_LIST, data: res }));
  }
}
function* clientCreate({ payload }) {
  try {
    const res = yield call(Api.post, apiRoutes.clientstetimonials, payload);
    yield put(
      clientSuccess({ type: actionTypes.CLIENT_CREATE, data: res?.data?.data })
    );
  } catch (error) {
    yield put(clientError({ type: actionTypes.CLIENT_CREATE, data: res }));
  }
}
function* clientUpdate({ payload }) {
  try {
    const res = yield call(
      Api.put,
      `${apiRoutes.clientstetimonials}/${payload.id}`,payload);
    yield put(
      clientSuccess({ type: actionTypes.CLIENT_UPDATE, data: res?.data?.data })
    );
  } catch (error) {
    yield put(clientError({ type: actionTypes.CLIENT_UPDATE, data: res }));
  }
}
function* clientDelete({ payload }) {
  try {
    const res = yield call(
      Api.delete,
      `${apiRoutes.clientstetimonials}/${payload}`
    );
    yield put(
      clientSuccess({ type: actionTypes.CLIENT_DELETE, data: res?.data })
    );
  } catch (error) {
    yield put(clientError({ type: actionTypes.CLIENT_DELETE, data: res }));
  }
}

function* clientDetails({ payload }) {
  try {
    const res = yield call(
      Api.get,
      `${apiRoutes.clientstetimonials}/${payload}`
    );
    yield put(
      clientSuccess({ type: actionTypes.CLIENT_DETAILS, data: res?.data?.data })
    );
  } catch (error) {
    yield put(clientError({ type: actionTypes.CLIENT_DETAILS, data: res }));
  }
}
function* clientPage({ payload }) {
  try {
    const res = yield call(
      Api.get,
      `${apiRoutes.clientstetimonials}?page=${payload}&per_page=6`
    );
    yield put(
      clientSuccess({ type: actionTypes.CLIENT_PAGE, data: res?.data?.data })
    );
  } catch (error) {
    yield put(clientError({ type: actionTypes.CLIENT_PAGE, data: res }));
  }
}


function* clientPageall({ payload }) {
  try {
    const res = yield call(
      Api.get,
      `${apiRoutes.clientstetimonials}?page=${payload}&per=all`
    );
    yield put(
      clientSuccess({ type: actionTypes.CLIENT_PAGE_ALL, data: res?.data?.data })
    );
  } catch (error) {
    yield put(clientError({ type: actionTypes.CLIENT_PAGE_ALL, data: res }));
  }
}







export default function* clientSagas() {
  yield takeLatest(actionTypes.CLIENT_LIST, clientList);
  yield takeLatest(actionTypes.CLIENT_CREATE, clientCreate);
  yield takeLatest(actionTypes.CLIENT_UPDATE, clientUpdate);
  yield takeLatest(actionTypes.CLIENT_DETAILS, clientDetails);
  yield takeLatest(actionTypes.CLIENT_DELETE, clientDelete);
  yield takeLatest(actionTypes.CLIENT_PAGE, clientPage);
  yield takeLatest(actionTypes.CLIENT_PAGE_ALL,clientPageall);
}
