export interface IObject {
	[key: string]: any;
}

export interface IUserItem {
	id: number;
	avatar: string;
	name: string;
	repoLink: string;
	type: string;
}

export interface IUser {
	id: number;
	avatar: string | null;
	bio: string | null;
	email: string | null;
	followers: number;
	following: number;
	location: string | null;
	login: string;
	name: string | null;
	public_gists: number;
	public_repos: number;
	repoLink: string;
}

export interface IUserRepo {
	name: string;
	id: number;
	url: string;
	stars: number;
	forks: number;
}

export interface IError {
	message: string;
	code: number;
}

export interface IUsersState {
	users: IUserItem[];
	loading: boolean;
	error: null | string;
}

export interface IUserState {
	user: IUser | null;
	loading: boolean;
	error: null | string;
}

export interface IUserReposState {
	repos: IUserRepo[] | null;
	loading: boolean;
	error: null | string;
}
