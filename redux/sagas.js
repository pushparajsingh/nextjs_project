import { all } from "redux-saga/effects";
import authSagas from "./Auth/Auth.saga";
import teamSagas from "./Team/Team.saga";
import clientSagas from "./Client/Client.saga"
import careerSagas from "./Careers/Careers.saga"
import designationSagas from "./Designations/Designations.saga";
import categoriesSagas from "./Categories/categories.saga";
import blogSagas from "./Blogs/Blogs.saga";
import companySagas from "./company_events/company.saga"

export default function* rootSagas() {
  yield all([authSagas(), teamSagas(),designationSagas(),clientSagas(),careerSagas(),categoriesSagas(),blogSagas(),companySagas()]);

}

