import {
  FetchTweetsActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStateActionInterface,
  TweetsActionsType,
} from './contracts/actionTypes';
import { LoadingState, TweetsState } from './contracts/state';

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const setTweetsLoadingState = (
  payload: LoadingState,
): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export type TweetsActions =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | SetTweetsLoadingStateActionInterface;
