import { actionTypes } from "./Team.constant";

const initialState = {};
const team = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEAM_LIST:
      return { ...state, listLoading: true };
    case actionTypes.TEAM_DETAILS:
      return { ...state, detailsLoading: true };
    case actionTypes.TEAM_CREATE:
      return { ...state, createLoading: true };
    case actionTypes.TEAM_UPDATE:
      return { ...state, updateLoading: true };
    case actionTypes.TEAM_DELETE:
      return { ...state, deleteLoading: true };

    case actionTypes.SUCCESS:
      switch (action.payload.type) {
        case actionTypes.TEAM_LIST:
          return { ...state, list: action?.payload?.data, listLoading: false };
        case actionTypes.TEAM_DETAILS:
          return {
            ...state,
            detailsLoading: false,
            details: action?.payload?.data,
          };
        case actionTypes.TEAM_CREATE:
          return {
            ...state,
            createLoading: false,
            create: action?.payload?.data,
          };
        case actionTypes.TEAM_UPDATE:
          return {
            ...state,
            updateLoading: false,
            update: action?.payload?.data,
          };
        case actionTypes.TEAM_DELETE:
          return {
            ...state,
            deleteLoading: false,
            delete: action?.payload?.data,
          };
        default:
          return state;
      }
    case actionTypes.ERROR:
      switch (action.payload.type) {
        case actionTypes.TEAM_LIST:
          return { ...state, listLoading: false, error: action?.payload?.data };
        case actionTypes.TEAM_DETAILS:
          return {
            ...state,
            detailsLoading: false,
            error: action?.payload?.data,
          };
        case actionTypes.TEAM_CREATE:
          return {
            ...state,
            createLoading: false,
            error: action?.payload?.data,
          };
        case actionTypes.TEAM_UPDATE:
          return {
            ...state,
            updateLoading: false,
            error: action?.payload?.data,
          };
        case actionTypes.TEAM_DELETE:
          return {
            ...state,
            deleteLoading: false,
            error: action?.payload?.data,
          };
        default:
          return state;
      }
    case actionTypes.TEAM_RESET:
      return initialState;
    default:
      return { ...state };
  }
};
export default team;
