import { all, takeLatest, call, put, select } from "redux-saga/effects";
import api from "../../services/api";
import { navigate } from "../../services/navigation";
import * as LoginActions from "../actions/login";
import * as RepoActions from "../actions/repositories";

function* login(action) {
  try {
    yield call(api.get, `/users/${action.params.username}`);

    yield put(LoginActions.loginSucess(action.params.username));

    navigate("Repositories");
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}

function* loadRepositories(action) {
  try {
    const { username } = yield select(state => state.login);
    const response = yield call(api.get, `/users/${username}/repos`);
    yield put(RepoActions.repoSucess(response));
  } catch (err) {
    yield put(RepoActions.repoFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest("LOGIN_REQUEST", login),
    takeLatest("REPO_REQUEST", loadRepositories)
  ]);
}
