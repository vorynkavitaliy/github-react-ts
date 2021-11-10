import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layouts/Header/Header';
// import { Main } from './pages/Main.page';
import { UserPage } from './pages/User.page';
import { Users } from './pages/Users.page';
const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className='container'>
				<Header />
				<Routes>
					<Route element={<Users />} path='/' />
					<Route element={<UserPage />} path='/users/:id' />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
