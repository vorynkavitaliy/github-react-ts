import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UsersList } from './../components/modules/UsersList.module';
import { useTypedSelected } from '../hooks/useTypedSelected.hook';
import { fetchUsers } from '../store/action-creators/user';
export const Users: React.FC = () => {
	const [search, setSearch] = useState('');
	const { users, error, loading } = useTypedSelected((state) => state.users);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			fetchUsers('users', {
				p: 1,
				per_page: 20,
			})
		);
	}, []);
	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const text = event.target.value;
		setSearch(text);
		if (!text) {
			dispatch(
				fetchUsers('users', {
					p: 1,
					per_page: 20,
				})
			);
		}
		dispatch(
			fetchUsers(`search/users`, {
				q: text,
				per_page: 20,
			})
		);
	};
	return (
		<>
			<input
				className='input'
				type='text'
				value={search}
				onChange={changeHandler}
			/>
			<UsersList users={users} loading={loading} />
		</>
	);
};
