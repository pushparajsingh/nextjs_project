import Api from "../Api";
import apiRoutes from "../ApiRoutes";
import { call, put, takeLatest } from "redux-saga/effects";
import { actionTypes } from "./company.constant";
import { companySuccess, companyError } from "./company.action";

function* companyList() {
  try {
    const res = yield call(Api.get, apiRoutes.company_events);
    yield put(
      companySuccess({ type: actionTypes.COMPANY_EVENTS_LIST, data: res?.data })
    );
  } catch (error) {
    yield put(
      companyError({ type: actionTypes.COMPANY_EVENTS_LIST, data: res })
    );
  }
}

function* companyDetails({ payload }) {
  try {
    const res = yield call(Api.get, `${apiRoutes.company_events}/${payload}`);
    yield put(
      companySuccess({
        type: actionTypes.COMPANY_EVENTS_DETAILS,
        data: res?.data?.data,
      })
    );
  } catch (error) {
    yield put(
      companyError({ type: actionTypes.COMPANY_EVENTS_DETAILS, data: res })
    );
  }
}
function* companyPage({ payload }) {
  try {
    const res = yield call(
      Api.get,
      `${apiRoutes.company_events}/?page=${payload}&per_page=6`
    );
    yield put(
      companySuccess({
        type: actionTypes.COMPANY_EVENTS_PAGE,
        data: res?.data?.data,
      })
    );
  } catch (error) {
    yield put(
      companyError({ type: actionTypes.COMPANY_EVENTS_PAGE, data: res })
    );
  }
}

function* companyCreate({ payload }) {
  try {
    const res = yield call(Api.post, apiRoutes.company_events, payload);
    yield put(
      companySuccess({
        type: actionTypes.COMPANY_EVENTS_CREATE,
        data: res?.data?.data,
      })
    );
  } catch (error) {
    yield put(
      companyError({ type: actionTypes.COMPANY_EVENTS_CREATE, data: res })
    );
  }
}

function* companyUpdate({ payload }) {
  try {
    const res = yield call(Api.put, `${apiRoutes.company_events}/${payload.id}`,payload);
    yield put(
      companySuccess({
        type: actionTypes.COMPANY_EVENTS_UPDATE,
        data: res?.data,
      })
    );
  } catch (error) {
    yield put(
      companyError({ type: actionTypes.COMPANY_EVENTS_UPDATE, data: res })
    );
  }
}

function* companyDelete({ payload }) {
  try {
    const res = yield call(
      Api.delete,
      `${apiRoutes.company_events}/${payload}`
    );
    yield put(
      companySuccess({
        type: actionTypes.COMPANY_EVENTS_DELETE,
        data: res?.data,
      })
    );
  } catch (error) {
    yield put(
      companyError({ type: actionTypes.COMPANY_EVENTS_DELETE, data: res })
    );
  }
}

export default function* companySagas() {
  yield takeLatest(actionTypes.COMPANY_EVENTS_LIST, companyList);
  yield takeLatest(actionTypes.COMPANY_EVENTS_DETAILS, companyDetails);
  yield takeLatest(actionTypes.COMPANY_EVENTS_CREATE, companyCreate);
  yield takeLatest(actionTypes.COMPANY_EVENTS_UPDATE, companyUpdate);
  yield takeLatest(actionTypes.COMPANY_EVENTS_DELETE, companyDelete);
  yield takeLatest(actionTypes.COMPANY_EVENTS_PAGE, companyPage);
}
