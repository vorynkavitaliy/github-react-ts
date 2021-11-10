import { IUser, IUserState } from '../interfaces';

export const initialUserState: IUserState = {
	user: null,
	loading: false,
	error: null,
};
export enum UserActionTypes {
	FETCH_USER = 'FETCH_USER',
	FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
	FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}
export interface FetchUserAction {
	type: UserActionTypes.FETCH_USER;
}

export interface FetchUserSuccess {
	type: UserActionTypes.FETCH_USER_SUCCESS;
	payload: IUser;
}

export interface FetchUserError {
	type: UserActionTypes.FETCH_USER_ERROR;
	payload: string;
}

export type UserAction = FetchUserAction | FetchUserSuccess | FetchUserError;
