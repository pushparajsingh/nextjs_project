import { combineReducers } from "redux";
import auth from "./Auth/Auth.reducer";
import team from "./Team/Team.reducer";
import designations from "./Designations/Designations.reducer";

const rootReducer = combineReducers({
  auth,
  team,
  designations
  
});
export default rootReducer;
