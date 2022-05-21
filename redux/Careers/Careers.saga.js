import Api from "../Api";
import apiRoutes from "../ApiRoutes";
import { call, put, takeLatest } from "redux-saga/effects";
import { actionTypes } from "./Careers.constant";
import { careerSuccess, careerError } from "./Careers.action";

function* careerList() {
  try {
    const res = yield call(Api.get, apiRoutes.careers);
    yield put(careerSuccess({ type: actionTypes.CAREERS_LIST, data: res?.data }));
  } catch (error) {
    yield put(careerError({ type: actionTypes.CAREERS_LIST, data: res }));
  }
}

function* careerDetails({ payload }) {
  try {
    const res = yield call(Api.get, `${apiRoutes.careers}/${payload}`);
    yield put(
      careerSuccess({ type: actionTypes.CAREERS_DETAILS, data: res?.data?.data })
    );
  } catch (error) {
    yield put(careerError({ type: actionTypes.CAREERS_DETAILS, data: res }));
  }
}
function* careerCreate({ payload }) {
  try {
    const res = yield call(Api.post, apiRoutes.careers, payload);
    yield put(
      careerSuccess({ type: actionTypes.CAREERS_CREATE, data: res?.data?.data })
    );
  } catch (error) {
    yield put(careerError({ type: actionTypes.CAREERS_CREATE, data: res }));
  }
}

function* careerUpdate({ payload }) {
  try {
    const res = yield call(Api.put,`${apiRoutes.careers}/${payload.id}`);
    debugger
    yield put(careerSuccess({ type: actionTypes.CAREERS_UPDATE, data: res?.data?.data }));
  } catch (error) {
    yield put(careerError({ type: actionTypes.CAREERS_UPDATE, data: res }));
  }
}
function* careerPage({payload}){
  try{
    const res=yield call (Api.get,`${apiRoutes.careers}/?page=${payload}&per_page=6`);
    yield put (
      careerSuccess({type:actionTypes.CAREERS_PAGE,data:res?.data?.data})
    )} catch (error) {
      yield put(careerError({ type: actionTypes.CAREERS_PAGE, data: res }));
    }
    
  
}
function* careerDelete({ payload }) {
  try {
    const res = yield call(Api.delete,`${apiRoutes.careers}/${payload}`);
    yield put(careerSuccess({ type: actionTypes.CAREERS_DELETE, data:payload }));
  } catch (error) {
    yield put(careerError({ type: actionTypes.CAREERS_DELETE, data: res }));
  }
}

export default function* careerSagas() {
  yield takeLatest(actionTypes.CAREERS_LIST, careerList);
  yield takeLatest(actionTypes.CAREERS_DETAILS, careerDetails);
  yield takeLatest(actionTypes.CAREERS_CREATE, careerCreate);
  yield takeLatest(actionTypes.CAREERS_UPDATE, careerUpdate);
  yield takeLatest(actionTypes.CAREERS_DELETE, careerDelete);
  yield takeLatest(actionTypes.CAREERS_PAGE,careerPage)
}
