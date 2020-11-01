import { LoadingStatus } from '../../../types';

export interface Tweet {
  _id: string;
  text: string;
  createdAt: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface TweetsState {
  items: Tweet[];
  addFormState: AddFormState;
  loadingState: LoadingStatus;
}
