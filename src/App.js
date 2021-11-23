import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Homepage from './components/home/home.component';
import Profile from './components/profile/profile.component';
import Create from './components/create/create.component';

// Code
const App = () => {
	return (
		<BrowserRouter>
			<div className='container'>
				<Routes>
					<Route path='/' exact element={<Homepage />} />
					<Route path='/create' exact element={<Create />} />
					<Route path='/:id' exact element={<Profile />} />
					<Route
						path='/:id/edit'
						exact
						element={<Create isBeingEdited={true} />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
