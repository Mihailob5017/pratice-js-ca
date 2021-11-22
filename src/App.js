import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Homepage from './components/home/home.component';

// Code
const App = () => {
	return (
		<BrowserRouter>
			<div className='container'>
				<Routes>
					<Route path='/' exact element={<Homepage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
