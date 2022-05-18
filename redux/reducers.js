import { combineReducers } from "redux";
import auth from "./Auth/Auth.reducer";
import team from "./Team/Team.reducer";
import designations from "./Designations/Designations.reducer";
import client from "./Client/Clientreducer";

const rootReducer = combineReducers({
  auth,
  team,
  designations,
  client
  
});

export default rootReducer;
