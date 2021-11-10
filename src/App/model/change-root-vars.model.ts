import { Theme } from '../context/theme.context';

export function changeCssRootVariables(theme: Theme) {
	const root = document.querySelector(':root') as HTMLElement;

	const components = [
		'body-background',
		'user-background',
		'user-text-color',
		'text-color',
	];

	components.forEach((component) => {
		root.style.setProperty(
			`--${component}-default`,
			`var(--${component}-${theme})`
		);
	});
}
