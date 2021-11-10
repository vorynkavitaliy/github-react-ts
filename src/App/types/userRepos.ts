import { IUserRepo, IUserReposState } from '../interfaces';

export const initialUserReposState: IUserReposState = {
	repos: null,
	loading: false,
	error: null,
};
export enum UserReposActionTypes {
	FETCH_USER_REPO = 'FETCH_USER_REPO',
	FETCH_USER_REPO_SUCCESS = 'FETCH_USER_REPO_SUCCESS',
	FETCH_USER_REPO_ERROR = 'FETCH_USER_REPO_ERROR',
}
export interface FetchUserReposAction {
	type: UserReposActionTypes.FETCH_USER_REPO;
}

export interface FetchUserReposSuccess {
	type: UserReposActionTypes.FETCH_USER_REPO_SUCCESS;
	payload: IUserRepo[];
}

export interface FetchUserReposError {
	type: UserReposActionTypes.FETCH_USER_REPO_ERROR;
	payload: string;
}

export type UserReposAction =
	| FetchUserReposAction
	| FetchUserReposSuccess
	| FetchUserReposError;
