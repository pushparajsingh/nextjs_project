import { actionTypes } from "./Careers.constant";

export const careerSuccess = (payload) => {
  return {
    type: actionTypes.SUCCESS,
    payload,
  };
};
export const careerError=(payload)=>{
    return{
        type:actionTypes.ERROR,
        payload
    }
}
export const careerList = (payload) => {
    return {
      type: actionTypes.CAREERS_LIST,
      payload,
    };
  };
export const careerCreate=(payload)=>{
  return{
    type:actionTypes.CAREERS_CREATE,
    payload
  }
}
export const careerReset=(payload)=>{
  return{
    type:actionTypes.CAREERS_RESET,
    payload
  }
}
export const careerDelete=(payload)=>{
  return{
    type:actionTypes.CAREERS_DELETE,
    payload,

  }
}
export const careerDetails=(payload)=>{
  return{
    type:actionTypes.CAREERS_DETAILS,
    payload
  }
}
export const careerUpdate=(payload)=>{
 return{
    type:actionTypes.CAREERS_UPDATE,
    payload,
   
  }
}
export const careerPage=(payload)=>{
  return{
    type:actionTypes.CAREERS_PAGE,
    payload
  }
}

  