import React, { useState, useEffect } from 'react';
import './profile.style.css';

// React Router
import { useLocation } from 'react-router-dom';

// Redux
import { useDispatch, connect } from 'react-redux';
import {} from '../../redux/action.creators';

// Components
import LoadingComponent from '../loading/loading.component';

// Code
const Profile = () => {
	// Getting the ID
	let location = useLocation();
	const id = location.pathname.split('/')[1];

	const [isLoading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {}, []);

	return <div>ey</div>;
};

export default Profile;
