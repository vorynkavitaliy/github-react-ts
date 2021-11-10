import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Provider } from 'react-redux';
import { store } from './App/store';
import { ThemeProvider } from './App/provider/theme.provider';
import './assets/styles/index.sass'

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</Provider>,

	document.getElementById('root')
);
