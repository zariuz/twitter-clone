import { Action } from 'redux';
import { LoadingState, TagsState } from './state';

export enum TagsActionsType {
  SET_TAGS = 'tags/SET_TAGS',
  FETCH_TAGS = 'tags/FETCH_TAGS',
  SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

export interface SetTagsActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.SET_TAGS;
  payload: TagsState['items'];
}

export interface FetchTagsActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.FETCH_TAGS;
}

export interface SetTagsLoadingStateActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}
