import { all } from "redux-saga/effects";
import authSagas from "./Auth/Auth.saga";
import teamSagas from "./Team/Team.saga";
import clientSagas from "./Client/Client.saga"

export default function* rootSagas() {
  yield all([authSagas(), teamSagas(),clientSagas()]);
}
