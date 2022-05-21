import { call, put, takeLatest } from "redux-saga/effects";
import { actionTypes } from "./Designations.constant";
import { designationsSuccess,designationsError } from "./Designations.action";
import apiRoutes from "../ApiRoutes";
import Api from "../Api";


function* designationsList() {
  try {
      const res = yield call(Api.get, apiRoutes.designations);
      yield put(designationsSuccess({ type: actionTypes.DESIGNATIONS_LIST, data: res?.data }));
    } catch (error) {
      yield put(designationsError({ type: actionTypes.DESIGNATIONS_LIST, data: res }));
    }
  } 
function* designationCreate({ payload }) {
    try {
      const res = yield call(Api.post, apiRoutes.designations, payload);
      yield put(
        designationsSuccess({ type: actionTypes.DESIGNATIONS_CREATE, data: res?.data?.data })
      );
    } catch (error) {
      yield put(designationsError({ type: actionTypes.DESIGNATIONS_CREATE, data: res }));
    }
  }
  function* designationDelete ({ payload }) {
    try {
      const res = yield call(Api.delete, `${apiRoutes.designations}/${payload}`);
      yield put(designationsSuccess({ type: actionTypes.DESIGNATIONS_DELETE, data: res?.data }));
    } catch (error) {
      yield put(designationsError({ type: actionTypes.DESIGNATIONS_DELETE, data: res }));
    }
  }
  function* designationDetails({ payload }) {
    try {
      const res = yield call(Api.get, `${apiRoutes.designations}/${payload}`);
      yield put(
        designationsSuccess({ type: actionTypes.DESIGNATIONS_DETAILS, data: res?.data?.data })
      );
    } catch (error) {
      yield put(designationsError({ type: actionTypes.DESIGNATIONS_DETAILS, data: res }));
    }
  }
  function* designationUpdate({ payload }) {
    try {
      const res = yield call(Api.put,`${apiRoutes.designations}/${payload}`);
      yield put(
        designationsSuccess({ type: actionTypes.DESIGNATIONS_UPDATE, data: res?.data?.data })
      );
    } catch (error) {
      yield put(designationsError({ type: actionTypes.DESIGNATIONS_UPDATE, data: res }));
    }
  }
  function* designationPage({ payload }) {
    try {
      const res = yield call(Api.get,`${apiRoutes.designations}?page=${payload}&per_page=6`);
      
      yield put(
        designationsSuccess({ type: actionTypes.DESIGNATIONS_PAGE, data: res?.data?.data })
      );
    } catch (error) {
      yield put(designationsError({ type: actionTypes.DESIGNATIONS_PAGE, data: res }));
    }
  }
  
  
  export default function* designationSagas() {
    yield takeLatest(actionTypes.DESIGNATIONS_LIST, designationsList);
    yield takeLatest(actionTypes.DESIGNATIONS_CREATE,designationCreate);
    yield takeLatest(actionTypes.DESIGNATIONS_DELETE,designationDelete);
    yield takeLatest(actionTypes.DESIGNATIONS_DETAILS,designationDetails);
    yield takeLatest(actionTypes.DESIGNATIONS_UPDATE,designationUpdate);
    yield takeLatest(actionTypes.DESIGNATIONS_PAGE,designationPage)
    
  }