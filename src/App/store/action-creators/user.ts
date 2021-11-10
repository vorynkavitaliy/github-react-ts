import { Dispatch } from 'redux';
import api from '../../axios';
import { IObject, IUserItem, IUserRepo } from '../../interfaces';
import { UserAction, UserActionTypes } from '../../types/user';
import { UserReposAction, UserReposActionTypes } from '../../types/userRepos';
import { UsersAction, UsersActionTypes } from '../../types/users';
import { IUser } from './../../interfaces';

export const fetchUsers = (url: string, query?: IObject) => {
	return async (dispatch: Dispatch<UsersAction>) => {
		try {
			dispatch({ type: UsersActionTypes.FETCH_USERS });

			const response = await api.get(url, query);
			let payload: IUserItem[] = [];
			if (url.includes('search')) {
				payload = response.data.items.map((p: any) => ({
					id: p.id,
					avatar: p.avatar_url,
					name: p.login,
					repoLink: p.html_url,
					type: p.type,
				}));
			} else {
				payload = response.data.map((p: any) => ({
					id: p.id,
					avatar: p.avatar_url,
					name: p.login,
					repoLink: p.html_url,
					type: p.type,
				}));
			}

			dispatch({
				type: UsersActionTypes.FETCH_USERS_SUCCESS,
				payload,
			});
		} catch (error) {
			dispatch({
				type: UsersActionTypes.FETCH_USERS_ERROR,
				payload: 'Users not found',
			});
		}
	};
};

export const fetchUser = (url: string, query?: IObject) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.FETCH_USER });

			const response = await api.get(url, query);
			const payload: IUser = {
				id: response.data.id,
				avatar: response.data.avatar_url,
				bio: response.data.bio,
				email: response.data.email,
				followers: response.data.followers,
				following: response.data.following,
				location: response.data.location,
				login: response.data.login,
				name: response.data.name,
				public_gists: response.data.public_gists,
				public_repos: response.data.public_repos,
				repoLink: response.data.public_repoLink,
			};
			dispatch({
				type: UserActionTypes.FETCH_USER_SUCCESS,
				payload,
			});
		} catch (error) {
			dispatch({
				type: UserActionTypes.FETCH_USER_ERROR,
				payload: 'User not found',
			});
		}
	};
};

export const fetchUserRepos = (url: string, query?: IObject) => {
	return async (dispatch: Dispatch<UserReposAction>) => {
		try {
			dispatch({ type: UserReposActionTypes.FETCH_USER_REPO });
			const response = await api.get(url, query);
			const payload: IUserRepo[] = response.data.map((r: any) => ({
				name: r.name,
				id: r.id,
				url: r.html_url,
				stars: r.stargazers_count,
				forks: r.forks,
			}));
			dispatch({
				type: UserReposActionTypes.FETCH_USER_REPO_SUCCESS,
				payload,
			});
		} catch (error) {
			dispatch({
				type: UserReposActionTypes.FETCH_USER_REPO_ERROR,
				payload: 'Repos not found',
			});
		}
	};
};
