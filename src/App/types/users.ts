import { IUserItem, IUsersState } from '../interfaces';

export const initialUsersState: IUsersState = {
	users: [],
	loading: false,
	error: null,
};
export enum UsersActionTypes {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}
export interface FetchUsersAction {
	type: UsersActionTypes.FETCH_USERS;
}

export interface FetchUsersSuccess {
	type: UsersActionTypes.FETCH_USERS_SUCCESS;
	payload: IUserItem[];
}

export interface FetchUsersError {
	type: UsersActionTypes.FETCH_USERS_ERROR;
	payload: string;
}

export type UsersAction = FetchUsersAction | FetchUsersSuccess | FetchUsersError;
