import { combineReducers } from 'redux';
import { userReducer } from './ducks/user/reducer';
import { tweetsReducer } from './ducks/tweets/reducer';
import { tagsReducer } from './ducks/tags/reducer';
import { tweetReducer } from './ducks/tweet/reducer';

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tweet: tweetReducer,
  tags: tagsReducer,
  user: userReducer,
});
