import React, { useState } from 'react';
import './comment.style.css';

// Components
import Comment from './comment.component';

//  Code
const CommentList = ({ comments, handleComment }) => {
	const [comment, setComment] = useState('');

	const commentHandler = () => {
		handleComment(comment);
		setComment('');
	};

	return (
		<div className='comment-container'>
			<h1 className='comment-header'>Comments</h1>
			{comments.length > 0 ? (
				comments.map((comment) => <Comment key={comment.id} {...comment} />)
			) : (
				<h1 className='no-comments'>Be the first one to comment!</h1>
			)}

			<div className='add-comment-option add-value'>
				<textarea
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				></textarea>
				<button onClick={commentHandler}>Comment</button>
			</div>
		</div>
	);
};

export default CommentList;
