import React from 'react';
import './comment.style.css';

// Components
import Comment from './comment.component';

//  Code
const CommentList = ({ comments }) => {
	return (
		<div className='comment-container'>
			<h1 className='comment-header'>Comments</h1>
			{comments.length > 0 ? (
				comments.map((comment) => <Comment key={comment.id} {...comment} />)
			) : (
				<h1 className='no-comments'>Be the first one to comment!</h1>
			)}

			<div className='add-comment-option'>
				<textarea></textarea>
				<button>Comment</button>
			</div>
		</div>
	);
};

export default CommentList;
