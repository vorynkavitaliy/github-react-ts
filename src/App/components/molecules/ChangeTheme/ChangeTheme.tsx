import React from 'react';
import s from './theme.module.sass';
import { Icon } from './../../../../assets/icons/global.icon';
import { MFlex } from './../../UI/MFlex/MFlex';
import { useTheme } from './../../../hooks/useTheme.hook';
import { Theme } from '../../../context/theme.context';
interface ThemeProps {
	onChange(id: string): void;
}

export const ChangeTheme: React.FC<ThemeProps> = (props: ThemeProps) => {
	const theme = useTheme();
	return (
		<MFlex aCenter wrap className={s.wrapper}>
			<span
				className={`${s.button} ${
					theme.theme === Theme.LIGHT ? s.active : ''
				}`}
				onClick={props.onChange.bind(null, 'light')}
			>
				<Icon icon='sun' color={theme.theme === Theme.LIGHT ? 'red' : '#BDC3C7'} />
			</span>
			<span
				className={`${s.button} ${
					theme.theme === Theme.DARK ? s.active : ''
				}`}
				onClick={props.onChange.bind(null, 'dark')}
			>
				<Icon icon='moon' color={theme.theme === Theme.DARK ? 'blue' : '#BDC3C7'} />
			</span>
		</MFlex>
	);
};
