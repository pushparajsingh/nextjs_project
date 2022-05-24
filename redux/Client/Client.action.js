import { actionTypes } from "./Client.constant";


export const clientList = (payload) => {
    return {
      type: actionTypes.CLIENT_LIST,
      payload,
    };
  };
  export const clientSuccess = (payload) => {
    return {
      type: actionTypes.SUCCESS,
      payload,
    };
  };
  
  export const clientError = (payload) => {
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
  export const clientDetails = (payload) => {
    return {
      type: actionTypes.CLIENT_DETAILS,
      payload,
    };
  };
  export const clientDelete = (payload) => {
    
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
   export const clientPage = (payload) =>{
     return{
       type: actionTypes.CLIENT_PAGE,
      payload,
    }
  }
  export const clientPageall = (payload) =>{
    return{
      type: actionTypes.CLIENT_PAGE_ALL,
      payload
    }
  }
   
  
  


  