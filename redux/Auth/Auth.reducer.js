import { actionTypes } from "./Auth.constant";
const token =
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjpbXSwidXNlckRldGFpbHMiOiJ7XCJpZFwiOjE1ODYsXCJyb2xlSWRcIjoxLFwicm9sZVwiOntcImlkXCI6MSxcIm5hbWVcIjpcIlNZU1RFTSBBRE1JTlwifSxcImNvbEZpcnN0TmFtZVwiOlwiQURNSU5cIixcImNvbE1pZGRsZU5hbWVcIjpudWxsLFwiY29sTGFzdE5hbWVcIjpcIkJBUk5BUkRcIixcImNvbEZ1bGxOYW1lXCI6XCJBRE1JTiBCQVJOQVJEXCIsXCJlbWFpbFwiOlwicG9vamEuc2FodStiYXJuYXJkQHRlY2htZW50LmNvbVwiLFwicGFzc3dvcmRcIjpudWxsLFwib3JnYW5haXNhdGlvbklkXCI6NDcsXCJvcmdhbmFpc2F0aW9uTmFtZVwiOlwiQmFybmFyZCBDb2xsZWdlXCIsXCJpc0FjdGl2ZVwiOnRydWUsXCJpc0FkbWluXCI6dHJ1ZSxcImFkbWluSWRcIjowLFwiaXNicmFuZGFkbWluXCI6ZmFsc2UsXCJjb2xDYW5BY2Nlc3NPd25Qb3J0Zm9saW9cIjp0cnVlLFwiY29sQ2FuQWNjZXNzUG9ydGZvbGlvXCI6dHJ1ZSxcImNvbElzU2l0ZUFjY2Vzc2libGVcIjp0cnVlLFwiY29sU2l0ZUFwcHJvdmFsUmVxdWlyZWRcIjp0cnVlLFwiY29sQ2FuQWNjZXNzU2l0ZVwiOnRydWUsXCJjb2xJc1JlcG9ydEFjY2Vzc2libGVcIjp0cnVlLFwiY29sUmVwb3J0QXBwcm92YWxSZXF1aXJlZFwiOnRydWUsXCJjb2xDYW5BY2Nlc3NSZXBvcnRcIjp0cnVlLFwiY29sSXNGaXJzdExvZ2luXCI6ZmFsc2UsXCJjb2xMb2dpbkZhaWx1cmVDb3VudFwiOjAsXCJjb2xMb2dpbkNvdW50XCI6bnVsbCxcImNvbElzRGVsZXRlZFwiOmZhbHNlLFwiY29sTG9naW5XaXRoU3NvXCI6dHJ1ZSxcImNvbFJlbW90ZUxvZ2luSWRcIjpudWxsLFwiY29sSXNBcGlLZXlcIjpmYWxzZSxcInNlc3Npb25JZFwiOlwiZDI3ZTMxOTMtZGQ4My00ZjA3LTlkNWMtZDUzMGRmZTYzZTJlXCIsXCJkZXZpY2VJZFwiOm51bGwsXCJjb2xMYXN0U3VjY2Vzc0xvZ2luQXRcIjpudWxsLFwiY29sTGFzdEZhaWx1cmVMb2dpbkF0XCI6bnVsbCxcImNvbFBhc3N3b3JkVXBkYXRlZEF0XCI6bnVsbCxcImNvbnRhY3REYXRhc1wiOltdfSIsInN1YiI6InBvb2phLnNhaHUrYmFybmFyZEB0ZWNobWVudC5jb20iLCJpYXQiOjE2NTEyMzY0NzEsImV4cCI6MTY1MTI0MDA3MX0.4BZ5qvsUU5t23uM0Ctw22uJ8HXoNSyItqY3eQ716VsRLuciTwe6IOhe_Dm5m0cAzLDjYq5kcBR_XPI0PUGPY8w";
const authToken =
  typeof window !== "undefined" && localStorage.getItem("authToken");

const initialState = { authToken: authToken };
const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      localStorage.setItem("authToken", token);
      return { ...state, authToken: token };
    case actionTypes.AUTH_LOGOUT:
      localStorage.clear();
      return { ...state, authToken: null, logout: true };
    case actionTypes.AUTH_RESET:
      return {};
    default:
      return state;
  }
};
export default auth;
