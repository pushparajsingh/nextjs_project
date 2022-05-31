import { combineReducers } from "redux";
import auth from "./Auth/Auth.reducer";
import team from "./Team/Team.reducer";
import designations from "./Designations/Designations.reducer";
import client from "./Client/Client.reducer";
import careers from "./Careers/Careers.reducer"
import categories from "./Categories/categories.reducer";
import blogs from "./Blogs/Blogs.reducer";
import company from "./companyevents/company.reducer"
const rootReducer = combineReducers({
  auth,
  team,
  designations,
  client,
  careers,
  categories,
  blogs,
  company,
  
});

export default rootReducer;
