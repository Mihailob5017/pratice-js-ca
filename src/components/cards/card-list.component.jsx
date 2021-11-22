import React from 'react';
import './card.style.css';
// Components
import Card from './card.component';

// Code
const CardList = ({ posts = [] }) => {
	return (
		<div className='card-grid'>
			{posts.map((postData) => (
				<Card key={postData.id} {...postData} />
			))}
		</div>
	);
};

export default CardList;
