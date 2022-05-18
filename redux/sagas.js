import { all } from "redux-saga/effects";
import authSagas from "./Auth/Auth.saga";
import teamSagas from "./Team/Team.saga";
import clientSagas from "./Client/Client.saga"
import designationSagas from "./Designations/Designations.saga";

export default function* rootSagas() {
  yield all([authSagas(), teamSagas(),designationSagas(),clientSagas()]);

}

