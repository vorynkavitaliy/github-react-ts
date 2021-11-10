import React, { useState } from 'react';
import { IUser, IUserRepo } from '../../../interfaces';
import { MFlex } from './../../UI/MFlex/MFlex';
import s from './user.module.scss';
import { Icon } from './../../../../assets/icons/global.icon';
import { useTheme } from './../../../hooks/useTheme.hook';
import { Theme } from '../../../context/theme.context';
import { Repo } from './../RepoItem/Repo';
import { fetchUserRepos } from '../../../store/action-creators/user';
import { useDispatch } from 'react-redux';
type UserProps = {
	user: IUser | null;
	repos: IUserRepo[] | null;
};

export const User: React.FC<UserProps> = ({ user, repos }: UserProps) => {
	const [search, setSearch] = useState('');
	const theme = useTheme();
	const iColor = theme.theme === Theme.LIGHT ? '#C4C4C4' : '#0d1117';
	const dispatch = useDispatch();
	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const text = event.target.value;
		setSearch(text);
		if (!text) {
			dispatch(fetchUserRepos(`/user/${user?.id}/repos`));
		}
		dispatch(fetchUserRepos(`search/user/${user?.id}/repos/${text}`));
	};
	return (
		<div className={s.user}>
			<div className={s['user-avatar']}>
				<img src={user?.avatar || ''} alt='#' />
			</div>
			<h3 className={s['user-name']}>{user?.name || 'Noname'}</h3>
			<span className={s['user-login']}>{user?.login}</span>
			<p className={s['user-bio']}>
				{user?.bio || "User didn't add bio"}
			</p>
			<MFlex column className={s['user-details']}>
				<MFlex aCenter className={s['user-details--item']}>
					<Icon
						w='24px'
						h='24px'
						icon='users'
						color={iColor}
						className={s['user-details--item-icon']}
					/>
					{user?.followers || 0}
				</MFlex>
				<MFlex aCenter className={s['user-details--item']}>
					<Icon
						w='24px'
						h='24px'
						icon='users'
						color={iColor}
						className={s['user-details--item-icon']}
					/>
					{user?.following || 0}
				</MFlex>
				<MFlex aCenter className={s['user-details--item']}>
					<Icon
						w='24px'
						h='24px'
						icon='git'
						color={iColor}
						className={s['user-details--item-icon']}
					/>
					{user?.public_gists || 0}
				</MFlex>
				<MFlex aCenter className={s['user-details--item']}>
					<Icon
						w='24px'
						h='24px'
						icon='git'
						color={iColor}
						className={s['user-details--item-icon']}
					/>
					{user?.public_repos || 0}
				</MFlex>
				{user?.location ? (
					<MFlex aCenter className={s['user-details--item']}>
						<Icon
							w='24px'
							h='24px'
							icon='location'
							color={iColor}
							className={s['user-details--item-icon']}
						/>
						{user?.location}
					</MFlex>
				) : (
					''
				)}
			</MFlex>
			<input
				className='input'
				style={{ marginTop: '20px' }}
				type='text'
				value={search}
				onChange={changeHandler}
			/>
			<ul
				style={{
					marginTop: '20px',
					overflow: 'auto',
					maxHeight: '300px',
				}}
			>
				{repos ? (
					repos.map((r) => {
						return (
							<li key={r.id}>
								<Repo repo={r} />
							</li>
						);
					})
				) : (
					<li>Repos not found</li>
				)}
			</ul>
		</div>
	);
};
