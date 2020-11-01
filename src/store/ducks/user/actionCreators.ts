import { LoginFormProps } from './../../../pages/SignIn/components/LoginModal';
import { UserState } from './contracts/state';
import {
  SetUserDataActionInterface,
  UserActionsType,
  SetUserLoadingActionInterface,
  FetchSignInActionInterface,
} from './contracts/actionTypes';

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export const setUserLoadingStatus = (
  payload: UserState['status'],
): SetUserLoadingActionInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});

export type UserActions =
  | SetUserDataActionInterface
  | SetUserLoadingActionInterface
  | FetchSignInActionInterface;
