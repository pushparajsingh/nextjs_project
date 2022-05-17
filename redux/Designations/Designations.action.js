import { actionTypes } from "./Designations.constant";



export const designationsSuccess = (payload) => {
  return {
    type: actionTypes.SUCCESS,
    payload,
  };
};

export const designationsError = (payload) => {
  return {
    type: actionTypes.ERROR,
    payload,
  };
};

export const designationsList = (payload) => {
  return {
      type: actionTypes.DESIGNATIONS_LIST,
      payload,
    };
  };
export const designationCreate=(payload)=>{
  console.log("gg",payload)
  return{
    type:actionTypes.DESIGNATIONS_CREATE,
    payload
  }
}
export const designationReset = (payload) => {
  console.log("1",payload)
  return {
    type: actionTypes.DESIGNATIONS_RESET,
    payload,
  };
};
export const designationDetails = (payload) => {
  return {
    type: actionTypes.DESIGNATIONS_DETAILS,
    payload,
  };
};

export const designationUpdate = (payload) => {
  return {
    type: actionTypes.DESIGNATIONS_UPDATE,
    payload,
  };
};

export const designationDelete = (payload) => {

  return {
    type: actionTypes.DESIGNATIONS_DELETE,
    payload,
  };
};
export const designationPage=(payload)=>{
  return {
    type: actionTypes.DESIGNATIONS_PAGE,
    payload,
  };

}

