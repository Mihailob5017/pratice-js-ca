import React, { useState } from 'react';
import './create.style.css';

// React Filebase
import FileBase from 'react-file-base64';

// React Router Dom
import { Link } from 'react-router-dom';

// Redux
import { connect, useDispatch } from 'react-redux';
import {} from '../../redux/action.creators';

// Code
const Create = () => {
	const [id, setId] = useState('');
	const [likes, setLikes] = useState(0);
	const [text, setText] = useState('');
	const [imageString, setImageString] = useState('');
	const [tagValue, setTagValue] = useState('');
	const [tags, replaceTags] = useState(['dog', 'cat', 'mountain']);
	const [imageUploadText, setImageUploadText] = useState('Chose Image');

	const addTag = () => {
		if (tagValue === '') {
			alert('Please write something first');
			return;
		}
		replaceTags([...tags, tagValue]);
		setTagValue('');
	};

	const removeTag = (tagValue) => {
		const newTags = tags.filter((tag) => tag !== tagValue);
		replaceTags(newTags);
	};

	return (
		<div className='create-container'>
			<h1 className='create-header'>Create New Post</h1>
			<p className='create-info'>
				<b>Komentar:</b> API je zahtevao validan User ID da bi napravio novi
				Post, umesto da pravim posebnu stranicu za pravljenje novih korisnika,
				nalepio sam par vec postojecih ID-ova koji samo treba da se nalepe u
				"User ID" polje
			</p>
			<p>Sara Andersen ID: 60d21b4667d0d8992e610c85</p>
			<p>Kenneth CarterID: 60d0fe4f5311236168a10a12</p>
			<p>Vaino Sakala ID: 60d0fe4f5311236168a10a1a</p>
			<div className='input-container'>
				<div className='id-container'>
					<label>User ID: </label>
					<input
						type='text'
						value={id}
						onChange={(e) => setId(e.target.value)}
					/>
				</div>
				<div className='likes-container'>
					<label>Like Count: </label>
					<input
						type='number'
						value={likes}
						onChange={(e) => setLikes(e.target.value)}
					/>
				</div>
			</div>

			<div className='text-container'>
				<textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
				></textarea>
			</div>
			<div className='tags-container'>
				<label>Add Tags</label>
				<input
					type='text'
					value={tagValue}
					onChange={(e) => setTagValue(e.target.value)}
				/>
				<button className='add-tags-btn' onClick={addTag}>
					Add Tags
				</button>
				<div className='tags-display'>
					{tags.map((tag, i) => (
						<label key={i} className='tag'>
							{tag}
							<button value={tag} onClick={(e) => removeTag(e.target.value)}>
								X
							</button>
						</label>
					))}
				</div>
			</div>
			<div className='buttons-container'>
				<button className='create-button'>
					<FileBase
						type='file'
						multiple={false}
						onDone={({ base64 }) => {
							setImageString(base64);
							setImageUploadText('Image Selected');
						}}
					/>
					{imageUploadText}
				</button>
				<button className='create-button'>Create Post</button>
				<Link to='/'>
					<button className='create-button'>Back to Homepage</button>
				</Link>
			</div>
		</div>
	);
};

export default Create;
