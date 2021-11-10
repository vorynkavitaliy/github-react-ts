import { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from '../context/theme.context';
import { changeCssRootVariables } from '../model/change-root-vars.model';
import { storage } from '../model/storage.model';

interface Props {
	children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
	const [theme, setTheme] = useState<Theme>(
		storage.getItem('theme') || Theme.LIGHT
	);
	changeCssRootVariables(theme);
	const changeTheme = (theme: Theme) => {
		storage.setItem('theme', theme);
		setTheme(theme);
		changeCssRootVariables(theme);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				changeTheme,
			}}
			{...props}
		>
			{children}
		</ThemeContext.Provider>
	);
};
