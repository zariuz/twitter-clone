import { call, put, takeLatest } from 'redux-saga/effects';

import { LoadingStatus } from './../../types';
import { setUserData, setUserLoadingStatus } from './actionCreators';
import { FetchSignInActionInterface, UserActionsType } from './contracts/actionTypes';
import { AuthApi } from './../../../services/api/authApi';

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
  try {
    const data = yield call(AuthApi.signIn, payload);
    window.localStorage.setItem('token', data.token);
    yield put(setUserData(data));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
}
