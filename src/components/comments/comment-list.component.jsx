import React from 'react';
import './comment.style.css';

// Components
import Comment from './comment.component';

//  Code
const CommentList = ({ comments }) => {
	console.log(comments);
	return (
		<div className='comment-container'>
			<h1 className='comment-header'>Comments</h1>
			{comments.map((comment) => (
				<Comment key={comment.id} {...comment} />
			))}
		</div>
	);
};

export default CommentList;
