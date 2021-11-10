import { combineReducers } from 'redux';
import { usersReducer, userReducer, userReposReducer } from './userReducers';

export const rootReducer = combineReducers({
	users: usersReducer,
	user: userReducer,
	repos: userReposReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
