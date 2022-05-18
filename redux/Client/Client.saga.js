import { actionTypes } from "./Client.constant"
import { call, put, takeLatest } from "redux-saga/effects";
import { clintSuccess,clintError }from "./Client.action"
import apiRoutes from '../ApiRoutes'
import Api from "../Api";




    function* clientList() {
        try {
          const res = yield call(Api.get, apiRoutes.clientstetimonials);
          yield put(clintSuccess({ type: actionTypes.CLIENT_LIST, data: res?.data }));
        } catch (error) {
          yield put(clintError({ type: actionTypes.CLIENT_LIST, data: res }));
        }
      }
      function* clientCreate({ payload }) {
        try {
          const res = yield call(Api.post, apiRoutes.clientstetimonials, payload);
          yield put(
            clintSuccess({ type: actionTypes.CLIENT_CREATE, data: res?.data?.data })
          );
        } catch (error) {
          yield put(clintError({ type: actionTypes.CLIENT_CREATE, data: res }));
          } 
      }    
      function*  clientUpdate ({ payload }) {
        try {
          const res = yield call(Api.put, `${apiRoutes.clientstetimonials}/${payload}`);
          yield put(
            clintSuccess({ type: actionTypes.CLIENT_UPDATE, data: res?.data?.data })
          );
        } catch (error) {
          yield put(clintError({ type: actionTypes.CLIENT_UPDATE, data: res }));
        }
      }
      function* clintDelete({ payload }) {
        
        try {
          const res = yield call(Api.delete, `${apiRoutes.clientstetimonials}/${payload}`);
          yield put(clintSuccess({ type: actionTypes.CLIENT_DELETE, data: res?.data }));
        } catch (error) {
          yield put(clintError({ type: actionTypes.CLIENT_DELETE, data: res }));
        }
      }
     
      function* clintDetails({ payload }) {
        try {
          const res = yield call(Api.get, `${apiRoutes.clientstetimonials}/${payload}`);
          yield put(
            clintSuccess({ type: actionTypes.CLIENT_DETAILS, data: res?.data?.data })
          );
        } catch (error) {
          yield put(clintError({ type: actionTypes.CLIENT_DETAILS, data: res }));
        }
      }
      function* clintpage({payload}){
        try{
          const res=yield call (Api.get,`${apiRoutes.clientstetimonials}?page=${payload}&per_page=5`);
          yield put (
            clintSuccess({type:actionTypes.CLIENT_PAGE,data:res?.data?.data})
          )} catch (error) {
            yield put(clintError({ type: actionTypes.CLIENT_PAGE, data: res }));
         }
         
       
       }
    


export default function* clientSagas() {
    yield takeLatest(actionTypes.CLIENT_LIST, clientList);
    yield takeLatest(actionTypes.CLIENT_CREATE, clientCreate);
    yield takeLatest(actionTypes.CLIENT_UPDATE,clientUpdate );
    yield takeLatest (actionTypes.CLIENT_DETAILS,clintDetails);
    yield takeLatest (actionTypes.CLIENT_DELETE,clintDelete);
    yield takeLatest(actionTypes.CLIENT_PAGE,clintpage)
   
  }

  
  