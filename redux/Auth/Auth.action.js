import { actionTypes } from "./Auth.constant";

export const authSuccess = (data) => {
  return {
    type: actionTypes.SUCCESS,
    payload: data,
  };
};

export const authError = (data) => {
  return {
    type: actionTypes.ERROR,
    payload: data,
  };
};

export const authLogin = (data) => {
  return {
    type: actionTypes.AUTH_LOGIN,
    payload: data,
  };
};

export const authLogout = (data) => {
  return {
    type: actionTypes.AUTH_LOGOUT,
    payload: data,
  };
};

export const authReset = (data) => {
  return {
    type: actionTypes.AUTH_RESET,
    payload: data,
  };
};
