import React from 'react';
import { UserItem } from '../molecules/UserItem/UserItem.molecule';
import { IUserItem } from './../../interfaces';

type UsersListProps = {
	users: IUserItem[];
	loading: boolean;
};

export const UsersList: React.FC<UsersListProps> = ({ users, loading }) => {
	if (loading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}
	return (
		<ul className='users-list'>
			{users.map((user) => {
				return <UserItem user={user} key={user.id} />;
			})}
		</ul>
	);
};
