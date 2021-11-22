import React, { useState, useEffect } from 'react';
import './home.style.css';
import AddIcon from '../../svg/plus.svg';

// React Router
import { Link } from 'react-router-dom';

// Redux
import { useDispatch, connect } from 'react-redux';
import { getAllPosts } from '../../redux/action.creators';

//  Components
import Loading from '../loading/loading.component';
import CardList from '../cards/card-list.component';

//  Code
const Homepage = ({ posts }) => {
	const [isLoading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(async () => {
		await dispatch(getAllPosts());
		setLoading(false);
	}, []);

	return (
		<>
			<h1 className='homepage-header'>All Posts</h1>
			{isLoading === true ? <Loading /> : <CardList posts={posts} />}
			<Link to='/create'>
				<button className='add-btn'>
					<img src={AddIcon} alt='Add Svg' />
					Add Post
				</button>
			</Link>
		</>
	);
};

// Connect State
const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps)(Homepage);
