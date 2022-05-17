import { combineReducers } from "redux";
import auth from "./Auth/Auth.reducer";
import team from "./Team/Team.reducer";
import client from "./Client/Clientreducer"
const rootReducer = combineReducers({
  auth,
  team,
  client
});
export default rootReducer;
