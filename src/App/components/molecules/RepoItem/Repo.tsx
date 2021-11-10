import React from 'react';
import { IUserRepo } from '../../../interfaces';
import s from './repo.module.sass';
type RepoProps = {
	repo: IUserRepo;
};
export const Repo: React.FC<RepoProps> = ({ repo }: RepoProps) => {
	return (
		<div className={s.repo}>
			<a className={s['repo-name']} href={repo.url} target='_blank'>
				{repo.name}
			</a>
			<span className={s['repo-details']}>
				<span className={s['repo-details--item']}>
					Stars: {repo.stars}
				</span>
				<span className={s['repo-details--item']}>Forks: {repo.forks}</span>
			</span>
		</div>
	);
};
