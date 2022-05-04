import { actionTypes } from "./Auth.constant";

const authToken =
  typeof window !== "undefined" && localStorage.getItem("authToken");

const initialState = { authToken: authToken };
const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUCCESS:
      switch (action.payload.type) {
        case actionTypes.AUTH_LOGIN:
          localStorage.setItem("authToken", action?.payload?.data);
          return { ...state, authToken: action?.payload?.data };
        case actionTypes.AUTH_LOGOUT:
          localStorage.clear();
          return { ...state, authToken: null, logout: action?.payload?.data };
        default:
          return state;
      }
    case actionTypes.ERROR:
      switch (action.payload.type) {
        case actionTypes.AUTH_LOGIN:
          return { ...state, error: action?.payload?.data };
        case actionTypes.AUTH_LOGOUT:
          return { ...state, error: action?.payload?.data };
        default:
          return state;
      }
    case actionTypes.AUTH_RESET:
      return { ...initialState };
    default:
      return { ...state };
  }
};
export default auth;
