import React from 'react';
import { IUserItem } from '../../../interfaces';
import s from './user.module.sass';
import { NavLink } from 'react-router-dom';
type UserItemProps = {
	user: IUserItem;
};
export const UserItem: React.FC<UserItemProps> = ({ user }) => {
	return (
		<li className={s['user-wrapper']}>
			<NavLink to={`/users/${user.id}`} className={s.user}>
				<span className={s['user-avatar']}>
					<img src={user.avatar} alt={user.name} />
				</span>
				<h4 className='user-name'>{user.name}</h4>
			</NavLink>
		</li>
	);
};
