import Api from "../Api";
import apiRoutes from "../ApiRoutes";
import { call, put, takeLatest } from "redux-saga/effects";
import { actionTypes } from "./Team.constant";
import { teamSuccess, teamError } from "./Team.action";

function* teamList() {
  try {
    const res = yield call(Api.get, apiRoutes.team);
    yield put(teamSuccess({ type: actionTypes.TEAM_LIST, data: res?.data }));
  } catch (error) {
    yield put(teamError({ type: actionTypes.TEAM_LIST, data: res }));
  }
}

function* teamDetails({ payload }) {
  try {
    const res = yield call(Api.get, `${apiRoutes.team}/${payload}`);
    yield put(
      teamSuccess({ type: actionTypes.TEAM_DETAILS, data: res?.data?.data })
    );
  } catch (error) {
    yield put(teamError({ type: actionTypes.TEAM_DETAILS, data: res }));
  }
}
function* teamPage({ payload }) {
  try {
    const res = yield call(
      Api.get,
      `${apiRoutes.team}/?page=${payload}&per_page=6`
    );
    yield put(
      teamSuccess({ type: actionTypes.TEAM_PAGE, data: res?.data?.data })
    );
  } catch (error) {
    yield put(teamError({ type: actionTypes.TEAM_PAGE, data: res }));
  }
}

function* teamCreate({ payload }) {
  try {
    const res = yield call(Api.post, apiRoutes.team, payload);
    yield put(
      teamSuccess({ type: actionTypes.TEAM_CREATE, data: res?.data?.data })
    );
  } catch (error) {
    yield put(teamError({ type: actionTypes.TEAM_CREATE, data: res }));
  }
}

function* teamUpdate({ payload }) {
  try {
    const res = yield call(Api.put, `${apiRoutes.team}/${payload}`);
    yield put(teamSuccess({ type: actionTypes.TEAM_UPDATE, data: res?.data }));
  } catch (error) {
    yield put(teamError({ type: actionTypes.TEAM_UPDATE, data: res }));
  }
}

function* teamDelete({ payload }) {
  try {
    const res = yield call(Api.delete, `${apiRoutes.team}/${payload}`);
    yield put(teamSuccess({ type: actionTypes.TEAM_DELETE, data: res?.data }));
  } catch (error) {
    yield put(teamError({ type: actionTypes.TEAM_DELETE, data: res }));
  }
}



function* teamPageall({ payload }) {
  try {
    const res = yield call(
      Api.get,
      `${apiRoutes.team}/?page=${payload}&per=all`
    );
    yield put(
      teamSuccess({ type: actionTypes.TEAM_PAGE_ALL, data: res?.data?.data })
    );
  } catch (error) {
    yield put(teamError({ type: actionTypes.TEAM_PAGE_ALL, data: res }));
  }
}

export default function* teamSagas() {
  yield takeLatest(actionTypes.TEAM_LIST, teamList);
  yield takeLatest(actionTypes.TEAM_DETAILS, teamDetails);
  yield takeLatest(actionTypes.TEAM_CREATE, teamCreate);
  yield takeLatest(actionTypes.TEAM_UPDATE, teamUpdate);
  yield takeLatest(actionTypes.TEAM_DELETE, teamDelete);
  yield takeLatest(actionTypes.TEAM_PAGE, teamPage);
  yield takeLatest (actionTypes.TEAM_PAGE_ALL,teamPageall)
}
