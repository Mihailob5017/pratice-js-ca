import React from 'react';
import './card.style.css';

// Moment
import moment from 'moment';

// React Router
import { Link } from 'react-router-dom';

// Code
const Card = ({ id, image, text, likes, tags, owner, publishDate }) => {
	return (
		<Link to={`/${id}`} className='post-card'>
			<img className='post-img' src={image} alt={text} />
			<div className='post-info'>
				{/* Text */}
				<q className='post-text post-name'>{text}</q>
				{/* Owner */}
				<p className='post-text post-owner'>
					Photo by: {owner.firstName + ' ' + owner.lastName}
				</p>
				{/* Date */}
				<p className='post-text post-date'>
					{moment(publishDate).format('MMMM Do YYYY')}
				</p>
				{/* Likes / Tags */}
				<p className='post-text post-likes'>
					{tags.map((el, i) => (
						<label key={i} className='tag'>
							{el}
						</label>
					))}
				</p>
			</div>
		</Link>
	);
};

export default Card;
