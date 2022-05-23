import Api from "../Api";
import apiRoutes from "../ApiRoutes";
import { call, put, takeLatest } from "redux-saga/effects";
import { actionTypes } from "./categories.constant";
import { categoriesSuccess, categoriesError } from "./categories.action";


function* categoriesList() {
  try {
    const res = yield call(Api.get,apiRoutes.categories);
    yield put(categoriesSuccess({ type:actionTypes.CATEGORIES_LIST, data: res?.data }));
  } catch (error) {
    yield put(categoriesError({ type: actionTypes.CATEGORIES_LIST, data: res }));
  }
}

function* categoriesDetails({ payload }) {
  try {
    const res = yield call(Api.get, `${apiRoutes.categories}/${payload}`);
    yield put(
      categoriesSuccess({ type: actionTypes.CATEGORIES_DETAILS, data: res?.data?.data })
    );
  } catch (error) {
    yield put(categoriesError({ type: actionTypes.CATEGORIES_DETAILS, data: res }));
  }
}
function* categoriesPage({payload}){
  try{
    const res=yield call (Api.get,`${apiRoutes.categories}/?page=${payload}&per_page=6`);
    yield put (
      categoriesSuccess({type:actionTypes.CATEGORIES_PAGE,data:res?.data?.data})
    )} catch (error) {
      yield put(categoriesError({ type: actionTypes.CATEGORIES_PAGE, data: res }));
    }
}

function* categoriesCreate({ payload }) {
  try {
    const res = yield call(Api.post, apiRoutes.categories, payload);
    yield put(
      categoriesSuccess({ type: actionTypes.CATEGORIES_CREATE, data: res?.data?.data })
    );
  } catch (error) {
    yield put(categoriesError({ type: actionTypes.CATEGORIES_CREATE, data: res }));
  }
}

function* categoriesUpdate({ payload }) {
  
  try {
    const res = yield call(Api.put,`${apiRoutes.categories}/${payload}`);
    yield put(categoriesSuccess({ type: actionTypes.CATEGORIES_UPDATE, data: res?.data }));
  } catch (error) {
    yield put(categoriesError({ type: actionTypes.CATEGORIES_UPDATE, data: res }));
  }
}

function* categoriesDelete({ payload }) {
  try {
    const res = yield call(Api.delete, `${apiRoutes.categories}/${payload}`);
    yield put(categoriesSuccess({ type: actionTypes.CATEGORIES_DELETE, data: res?.data }));
  } catch (error) {
    yield put(categoriesError({ type: actionTypes.CATEGORIES_DELETE, data: res }));
  }
}

export default function* categoriesSagas() {
  yield takeLatest(actionTypes.CATEGORIES_LIST,categoriesList);
  yield takeLatest(actionTypes.CATEGORIES_DETAILS, categoriesDetails);
  yield takeLatest(actionTypes.CATEGORIES_CREATE, categoriesCreate);
  yield takeLatest(actionTypes.CATEGORIES_UPDATE, categoriesUpdate);
  yield takeLatest(actionTypes.CATEGORIES_DELETE, categoriesDelete);
  yield takeLatest(actionTypes.CATEGORIES_PAGE,categoriesPage)
}
