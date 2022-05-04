import { actionTypes } from "./Auth.constant";

export const authSuccess = (payload) => {
  return {
    type: actionTypes.SUCCESS,
    payload,
  };
};

export const authError = (payload) => {
  return {
    type: actionTypes.ERROR,
    payload,
  };
};

export const authLogin = (payload) => {
  return {
    type: actionTypes.AUTH_LOGIN,
    payload,
  };
};

export const authLogout = (payload) => {
  return {
    type: actionTypes.AUTH_LOGOUT,
    payload,
  };
};

export const authReset = (payload) => {
  return {
    type: actionTypes.AUTH_RESET,
    payload,
  };
};
