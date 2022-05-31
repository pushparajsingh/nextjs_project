import { actionTypes } from "./company.constant";
const initialState = {};
const company= (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COMPANY_EVENTS_LIST:
      return { ...state, listLoading: true };
    case actionTypes.COMPANY_EVENTS_DETAILS:
      return { ...state, detailsLoading: true };
    case actionTypes.COMPANY_EVENTS_CREATE:
      return { ...state, createLoading: true };
    case actionTypes.COMPANY_EVENTS_UPDATE:
      return { ...state, updateLoading: true };
    case actionTypes.COMPANY_EVENTS_DELETE:
      return { ...state, deleteLoading: true };
      case actionTypes.COMPANY_EVENTS_PAGE:
        return{ ...state,pageLoading: true};
        
    case actionTypes.SUCCESS:
      switch (action.payload.type) {
        case actionTypes.COMPANY_EVENTS_LIST:
          return { ...state, list: action?.payload?.data, listLoading: false };
        case actionTypes.COMPANY_EVENTS_DETAILS:
          return {
            ...state,
            detailsLoading: false,
            details: action?.payload?.data,
          };
          case actionTypes.COMPANY_EVENTS_PAGE:
          return{...state,page: action?.payload?.data,pageLoading: false};
        case actionTypes.COMPANY_EVENTS_CREATE:
          return {
            ...state,
            createLoading: false,
            create: action?.payload?.data,
          };
        case actionTypes.COMPANY_EVENTS_UPDATE:
          return {
            ...state,
            updateLoading: false,
            update: action?.payload?.data,
          };
        case actionTypes.COMPANY_EVENTS_DELETE:
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
        case actionTypes.COMPANY_EVENTS_LIST:
          return { ...state, listLoading: false, error: action?.payload?.data };
        case actionTypes.COMPANY_EVENTS_DETAILS:
          return {
            ...state,
            detailsLoading: false,
            error: action?.payload?.data,
          };
        case actionTypes.COMPANY_EVENTS_PAGE:
          return{
            ...state,
            pageLoading: false,
            error: action?.payload?.data,
          }

        case actionTypes.COMPANY_EVENTS_CREATE:
          return {
            ...state,
            createLoading: false,
            error: action?.payload?.data,
          };
        case actionTypes.COMPANY_EVENTS_UPDATE:
          return {
            ...state,
            updateLoading: false,
            error: action?.payload?.data,
          };
        case actionTypes.COMPANY_EVENTS_DELETE:
          return {
            ...state,
            deleteLoading: false,
            error: action?.payload?.data,
          };
        default:
          return state;
      }
    case actionTypes.COMPANY_EVENTS_RESET:
      return initialState;
    default:
      return { ...state };
  }
};
export default company;
