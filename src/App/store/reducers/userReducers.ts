import { IUserReposState, IUsersState, IUserState } from '../../interfaces';
import {
	initialUserState,
	UserAction,
	UserActionTypes,
} from '../../types/user';
import {
	initialUserReposState,
	UserReposAction,
	UserReposActionTypes,
} from '../../types/userRepos';
import {
	initialUsersState,
	UsersAction,
	UsersActionTypes,
} from '../../types/users';
export const usersReducer = (
	state = initialUsersState,
	action: UsersAction
): IUsersState => {
	switch (action.type) {
		case UsersActionTypes.FETCH_USERS:
			return {
				loading: true,
				error: null,
				users: [],
			};
		case UsersActionTypes.FETCH_USERS_SUCCESS:
			return {
				loading: false,
				error: null,
				users: action.payload,
			};
		case UsersActionTypes.FETCH_USERS_ERROR:
			return {
				loading: false,
				error: action.payload,
				users: [],
			};
		default:
			return state;
	}
};

export const userReducer = (
	state = initialUserState,
	action: UserAction
): IUserState => {
	switch (action.type) {
		case UserActionTypes.FETCH_USER:
			return {
				loading: true,
				error: null,
				user: null,
			};
		case UserActionTypes.FETCH_USER_SUCCESS:
			return {
				loading: false,
				error: null,
				user: action.payload,
			};
		case UserActionTypes.FETCH_USER_ERROR:
			return {
				loading: false,
				error: action.payload,
				user: null,
			};
		default:
			return state;
	}
};

export const userReposReducer = (
	state = initialUserReposState,
	action: UserReposAction
): IUserReposState => {
	switch (action.type) {
		case UserReposActionTypes.FETCH_USER_REPO:
			return {
				loading: true,
				error: null,
				repos: null,
			};
		case UserReposActionTypes.FETCH_USER_REPO_SUCCESS:
			return {
				loading: false,
				error: null,
				repos: action.payload,
			};
		case UserReposActionTypes.FETCH_USER_REPO_ERROR:
			return {
				loading: false,
				error: action.payload,
				repos: null,
			};
		default:
			return state;
	}
};
