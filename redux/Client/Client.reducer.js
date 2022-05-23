import { actionTypes} from "./Client.constant"

const initialState = {};
const client = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLIENT_LIST:
      return { ...state, listLoading: true };
    case actionTypes.CLIENT_DETAILS:
      return { ...state, detailsLoading: true };
    case actionTypes.CLIENT_CREATE:
      return { ...state, createLoading: true };
    case actionTypes.CLIENT_UPDATE:
      return { ...state, updateLoading: true };
    case actionTypes.CLIENT_DELETE:
      return { ...state, deleteLoading: true };
      case actionTypes .CLIENT_PAGE:
        return{...state,pageLoading: true};

    case actionTypes.SUCCESS:
      switch (action.payload.type) {
        case actionTypes.CLIENT_LIST:
          return { ...state, list: action?.payload?.data, listLoading: false };
        case actionTypes.CLIENT_DETAILS:
          return {
            ...state,
            detailsLoading: false,
            details: action?.payload?.data,
          };
        case actionTypes.CLIENT_CREATE:
        return {
            ...state,
            createLoading: false,
            create: action?.payload?.data,
          };
        case actionTypes.CLIENT_UPDATE: 
          return {
            ...state,
            updateLoading: false,
            update: action?.payload?.data,
          };
        case actionTypes.CLIENT_DELETE:
          return {
            ...state,
            deleteLoading: false,
            delete: action?.payload?.data,
          };
          case actionTypes.CLIENT_PAGE:
            return{
              ...state,
              pageLoading: false,
              page: action?.payload?.data

            }  
        default:
          return state;
      }
    case actionTypes.ERROR:
      switch (action.payload.type) {
        case actionTypes.CLIENT_LIST:
          return { ...state, listLoading: false, error: action?.payload?.data };
        case actionTypes.CLIENT_DETAILS:
          return {
            ...state,
            detailsLoading: false,
            error: action?.payload?.data,
          };
        case actionTypes.CLIENT_CREATE:
          return {
            ...state,
            createLoading: false,
            error: action?.payload?.data,
          };
        case actionTypes.CLIENT_UPDATE:
          return {
            ...state,
            updateLoading: false,
            error: action?.payload?.data,
          };
        case actionTypes.CLIENT_DELETE:
          return {
            ...state,
            deleteLoading: false,
            error: action?.payload?.data,
          };
        default:
          return state;
      }
      case actionTypes.CLIENT_PAGE:
        return{
          ...state,
          pageLoading: false,
          error: action?.payload?.data,
        }

 case actionTypes.CLIENT_RESET:
      return initialState;
    default:
      return { ...state };
  }
};
export default client;


































