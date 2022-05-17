import { actionTypes } from "./Team.constant";

export const teamSuccess = (payload) => {
  return {
    type: actionTypes.SUCCESS,
    payload,
  };
};

export const teamError = (payload) => {
  return {
    type: actionTypes.ERROR,
    payload,
  };
};

export const teamList = (payload) => {

  return {
    type: actionTypes.TEAM_LIST,
    payload,
  };
};

export const teamDetails = (payload) => {
  return {
    type: actionTypes.TEAM_DETAILS,
    payload,
  };
};

export const teamCreate = (payload) => {
  return {
    type: actionTypes.TEAM_CREATE,
    payload,
  };
};

export const teamUpdate = (payload) => {
  return {
    type: actionTypes.TEAM_UPDATE,
    payload,
  };
};

export const teamDelete = (payload) => {
  return {
    type: actionTypes.TEAM_DELETE,
    payload,
  };
};


export const teamPage=(payload)=>{
   return{
    type:actionTypes.TEAM_PAGE,
      payload,
    }
   }
export const teamReset = (payload) => {
  return {
    type: actionTypes.TEAM_RESET,
    payload,
  };
};
