import { actionTypes } from "./Blogs.constant";
import Api from "../Api";
import apiRoutes from "../ApiRoutes";
import { call, put, takeLatest } from "redux-saga/effects";
import { blogsSuccess, blogsError } from "./Blogs.action";

function* blogsList() {
  try {
    const res = yield call(Api.get, apiRoutes.blogs);
    yield put(blogsSuccess({ type: actionTypes.BLOGS_LIST, data: res?.data }));
  } catch (error) {
    yield put(blogsError({ type: actionTypes.BLOGS_LIST, data: res }));
  }
}

function* blogsDetails({ payload }) {
  try {
    const res = yield call(Api.get, `${apiRoutes.blogs}/${payload}`);
    yield put(
      blogsSuccess({ type: actionTypes.BLOGS_DETAILS, data: res?.data?.data })
    );
  } catch (error) {
    yield put(blogsError({ type: actionTypes.BLOGS_DETAILS, data: res }));
  }
}
function* blogsPage({ payload }) {
  try {
    const res = yield call(
      Api.get,
      `${apiRoutes.blogs}/?page=${payload}&per_page=6`
    );
    yield put(
      blogsSuccess({ type: actionTypes.BLOGS_PAGE, data: res?.data?.data })
    );
  } catch (error) {
    yield put(blogsError({ type: actionTypes.BLOGS_PAGE, data: res }));
  }
}

function* blogsCreate({ payload }) {
  try {
    const res = yield call(Api.post, apiRoutes.blogs, payload);
    yield put(
      blogsSuccess({ type: actionTypes.BLOGS_CREATE, data: res?.data?.data })
    );
  } catch (error) {
    yield put(blogsError({ type: actionTypes.BLOGS_CREATE, data: res }));
  }
}

function* blogsUpdate({ payload }) {
  try {
    const res = yield call(Api.put, `${apiRoutes.blogs}/${payload.id}`,payload);
    yield put(
      blogsSuccess({ type: actionTypes.BLOGS_UPDATE, data: res?.data })
    );
  } catch (error) {
    yield put(blogsError({ type: actionTypes.BLOGS_UPDATE, data: res }));
  }
}

function* blogsDelete({ payload }) {
  try {
    const res = yield call(Api.delete, `${apiRoutes.blogs}/${payload}`);
    yield put(
      blogsSuccess({ type: actionTypes.BLOGS_DELETE, data: res?.data })
    );
  } catch (error) {
    yield put(blogsError({ type: actionTypes.BLOGS_DELETE, data: res }));
  }
}

export default function* blogSagas() {
  yield takeLatest(actionTypes.BLOGS_LIST, blogsList);
  yield takeLatest(actionTypes.BLOGS_DETAILS, blogsDetails);
  yield takeLatest(actionTypes.BLOGS_CREATE, blogsCreate);
  yield takeLatest(actionTypes.BLOGS_UPDATE, blogsUpdate);
  yield takeLatest(actionTypes.BLOGS_DELETE, blogsDelete);
  yield takeLatest(actionTypes.BLOGS_PAGE, blogsPage);
}
