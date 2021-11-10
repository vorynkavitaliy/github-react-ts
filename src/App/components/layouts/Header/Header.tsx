import React from 'react';
import { NavLink } from 'react-router-dom';
import { Theme } from '../../../context/theme.context';
import { useTheme } from '../../../hooks/useTheme.hook';
import { MFlex } from './../../UI/MFlex/MFlex';
import { ChangeTheme } from './../../molecules/ChangeTheme/ChangeTheme';
import s from './header.module.sass'

interface HeaderProps {}
export const Header: React.FC = (props: HeaderProps) => {
	const theme = useTheme();

	const changeTheme = (type: string) => {
		switch (type) {
			case 'light':
				theme.changeTheme(Theme.LIGHT);
				break;

			case 'dark':
				theme.changeTheme(Theme.DARK);
				break;
			default:
				break;
		}
	};
	return (
		<header className={s.header}>
			<MFlex wrap jBetween aCenter>
				<NavLink to='/'>React</NavLink>

                <ChangeTheme onChange={changeTheme} />
			</MFlex>
		</header>
	);
};
