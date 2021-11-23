import React, { useState, useEffect } from 'react';
import './profile.style.css';
import LikeSvg from '../../svg/like.svg';

// Moment
import moment from 'moment';

// React Router
import { useLocation } from 'react-router-dom';

// Redux
import { useDispatch, connect } from 'react-redux';
import { getSpecificPost } from '../../redux/action.creators';

// Components
import LoadingComponent from '../loading/loading.component';
import CommentList from '../comments/comment-list.component';

// Code
const Profile = ({ post, comments }) => {
	// Getting the ID
	let location = useLocation();
	const id = location.pathname.split('/')[1];

	const [isLoading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(async () => {
		await dispatch(getSpecificPost(id));
		setLoading(false);
	}, []);

	return (
		<div className='profile-page-wrapper'>
			{isLoading ? (
				<LoadingComponent />
			) : (
				<div className='post-container'>
					<img src={post.image} alt='' />
					<p className='single-post-title'>
						<label>{post.owner.firstName + ' ' + post.owner.lastName}</label>
						{' ' + post.text}
					</p>
					<div className='single-post-info'>
						<div>
							{post.likes} <img src={LikeSvg} alt='Like SVG' />
							{post.tags.map((el, i) => (
								<label key={i} className='tag'>
									{el}
								</label>
							))}
						</div>
						<p>{moment(post.publishDate).format('MMMM Do YYYY')}</p>
					</div>
				</div>
			)}

			{isLoading ? <LoadingComponent /> : <CommentList comments={comments} />}
		</div>
	);
};

const mapStateToProps = (state) => ({
	post: state.extendedPost.post,
	comments: state.extendedPost.comments,
});

export default connect(mapStateToProps)(Profile);
