import { actionTypes } from "./Client.constant";


export const clientList = (payload) => {
    return {
      type: actionTypes.CLIENT_LIST,
      payload,
    };
  };
  export const clintSuccess = (payload) => {
    return {
      type: actionTypes.SUCCESS,
      payload,
    };
  };
  
  export const clintError = (payload) => {
    return {
      type: actionTypes.ERROR,
      payload,
    };
  };
  
  export const clientCreate = (payload) => {
    return {
      type: actionTypes.CLIENT_CREATE,
      payload,
    };
  };
  export const clientUpdate = (payload) => {

    return {
      type: actionTypes.CLIENT_UPDATE,
      payload,
    };
  };
  export const clintDetails = (payload) => {
    return {
      type: actionTypes.CLIENT_DETAILS,
      payload,
    };
  };
  export const clintDelete = (payload) => {
    
    return {
      type: actionTypes.CLIENT_DELETE,
      payload,
    };
  };
  export const clientReset = (payload) => {
    return {
      type: actionTypes.CLIENT_RESET,
      payload,
    };
  };
   export const clintpage = (payload) =>{
     return{
       type: actionTypes.CLIENT_PAGE,
      payload,
    }
  }
  
  
  


  