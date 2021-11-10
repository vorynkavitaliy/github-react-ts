import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypedSelected } from '../hooks/useTypedSelected.hook';
import { fetchUser } from '../store/action-creators/user';
import { User } from './../components/molecules/User/User';
import { fetchUserRepos } from './../store/action-creators/user';
export const UserPage: React.FC = () => {
	const { id } = useParams();
	const { user, error, loading } = useTypedSelected((state) => state.user);
	const { repos } = useTypedSelected((state) => state.repos);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUser(`user/${id}`));
		dispatch(fetchUserRepos(`/user/${id}/repos`));
	}, []);
	if (loading) {
		return <>Loading...</>;
	}
	return (
		<div>
			<User user={user} repos={repos} />
		</div>
	);
};
