import { call, put, takeLatest } from 'redux-saga/effects';
import { LoadingStatus } from './../../types';
import { TweetsApi } from '../../../services/api/tweetsApi';
import {
  addTweet,
  setAddFormState,
  setTweets,
  setTweetsLoadingState,
} from './actionCreators';
import { FetchAddTweetActionInterface, TweetsActionsType } from './contracts/actionTypes';
import { AddFormState } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingStatus.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload: text }: FetchAddTweetActionInterface) {
  try {
    const item = yield call(TweetsApi.addTweet, text);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
