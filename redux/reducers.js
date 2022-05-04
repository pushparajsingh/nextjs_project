import { combineReducers } from "redux";
import auth from "./Auth/Auth.reducer";
import team from "./Team/Team.reducer";

const rootReducer = combineReducers({
  auth,
  team,
});
export default rootReducer;
