import { actionTypes } from "./Careers.constant";

const initialState = {};
const careers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CAREERS_LIST:
      return { ...state, listLoading: true };
    case actionTypes.CAREERS_DETAILS:
      return { ...state, detailsLoading: true };
    case actionTypes.CAREERS_CREATE:
      return { ...state, createLoading: true };
    case actionTypes.CAREERS_UPDATE:
      return { ...state, updateLoading: true };
    case actionTypes.CAREERS_DELETE:
      return { ...state, deleteLoading: true };
      case actionTypes.CAREERS_PAGE:
        return{ ...state,pageLoading: true};
        
    case actionTypes.SUCCESS:
      switch (action.payload.type) {
        case actionTypes.CAREERS_LIST:
          return { ...state, list: action?.payload?.data, listLoading: false };
        case actionTypes.CAREERS_DETAILS:
          return {
            ...state,
            detailsLoading: false,
            details: action?.payload?.data,
          };
          case actionTypes.CAREERS_PAGE:
            console.log("34343",action.payload)
         
            return{...state,page: action?.payload?.data,pageLoading: false};
        case actionTypes.CAREERS_CREATE:
          return {
            ...state,
            createLoading: false,
            create: action?.payload?.data,
          };
        case actionTypes.CAREERS_UPDATE:
          return {
            ...state,
            updateLoading: false,
            update: action?.payload?.data,
          };
        case actionTypes.CAREERS_DELETE:
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
        case actionTypes.CAREERS_LIST:
          return { ...state, listLoading: false, error: action?.payload?.data };
        case actionTypes.CAREERS_DETAILS:
          return {
            ...state,
            detailsLoading: false,
            error: action?.payload?.data,
          };
        case actionTypes.CAREERS_PAGE:
          return{
            ...state,
            pageLoading: false,
            error: action?.payload?.data,
          }

        case actionTypes.CAREERS_CREATE:
          return {
            ...state,
            createLoading: false,
            error: action?.payload?.data,
          };
        case actionTypes.CAREERS_UPDATE:
          return {
            ...state,
            updateLoading: false,
            error: action?.payload?.data,
          };
        case actionTypes.CAREERS_DELETE:
          return {
            ...state,
            deleteLoading: false,
            error: action?.payload?.data,
          };
        default:
          return state;
      }
    case actionTypes.CAREERS_RESET:
      return initialState;
    default:
      return { ...state };
  }
};
export default careers;
