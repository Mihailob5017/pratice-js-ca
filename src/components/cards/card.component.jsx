import React from 'react';
import './card.style.css';
import LikeSvg from '../../svg/like.svg';

// Moment
import moment from 'moment';

// React Router
import { Link } from 'react-router-dom';

// Code
const Card = ({ id, key, image, text, likes, tags, owner, publishDate }) => {
	return (
		<Link to={`/${id}`} key={key} className='post-card'>
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
					{likes} <img src={LikeSvg} alt='Like SVG' />
					{tags.map((el) => (
						<label className='tag'>{el}</label>
					))}
				</p>
			</div>
		</Link>
	);
};

export default Card;
