import React, { useState } from 'react';
import './create.style.css';

import * as api from '../../api/index';

// React Filebase
import FileBase from 'react-file-base64';

// React Router Dom
import { Link, useNavigate } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Code
const Create = ({ isBeingEdited = false, post = null }) => {
	const navigate = useNavigate();

	// Helper Function
	const replaceState = (initialValue, propValue) =>
		isBeingEdited ? propValue : initialValue;

	// State
	const [id, setId] = useState(replaceState('', post.id));
	const [likes, setLikes] = useState(replaceState(0, post.likes));
	const [text, setText] = useState(replaceState('', post.text));
	const [imageString, setImageString] = useState(replaceState('', post.image));
	const [tagValue, setTagValue] = useState('');
	const [tags, replaceTags] = useState(replaceState([], post.tags));
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

	// API Handlers

	// Create New Post
	const createPostHandler = async () => {
		const object = {
			text,
			image: imageString,
			likes,
			tags,
			owner: id,
		};
		await api.createPost(object);
		alert('Post Successfully Created');
		navigate('/');
	};

	// Edit Post
	const editPostHandler = async () => {
		const object = {
			text,
			image: imageString,
			likes,
			tags,
		};
		await api.updatePost(id, object);
		alert('Post Successfully Updated');
		navigate('/');
	};

	return (
		<div className='create-container'>
			<h1 className='create-header'>
				{isBeingEdited ? 'Edit Post' : 'Create New Post'}
			</h1>
			<p className='create-info'>
				<b>Komentar:</b> Kod kreiranja novih Postova, API je zahtevao validan
				User ID da bi napravio novi Post, umesto da pravim posebnu stranicu za
				pravljenje novih korisnika, nalepio sam par vec postojecih ID-ova koji
				samo treba da se nalepe u "User ID" polje
			</p>
			<p>Sara Andersen ID: 60d21b4667d0d8992e610c85</p>
			<p>Kenneth CarterID: 60d0fe4f5311236168a10a12</p>
			<p>Vaino Sakala ID: 60d0fe4f5311236168a10a1a</p>
			<div className='input-container'>
				<div className='id-container'>
					<label>User ID: </label>
					<input
						disabled={isBeingEdited}
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
				<button
					onClick={isBeingEdited ? editPostHandler : createPostHandler}
					className='create-button'
				>
					{isBeingEdited ? 'Update Post' : 'Create Post'}
				</button>
				<Link to='/'>
					<button className='create-button'>Back to Homepage</button>
				</Link>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => ({
	post: state.extendedPost.post,
});
export default connect(mapStateToProps)(Create);
