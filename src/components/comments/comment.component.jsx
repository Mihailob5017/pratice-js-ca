import React from 'react';
import './comment.style.css';

import moment from 'moment';

const Comment = ({ message, publishDate, owner }) => {
	return (
		<div className='comment-wrapper'>
			<div className='comment-info'>
				<p>{owner.firstName + ' ' + owner.lastName}</p>
				<p>{moment(publishDate).format('MMMM Do YYYY')}</p>
			</div>
			<p className='comment-message'>{message}</p>
		</div>
	);
};

export default Comment;
