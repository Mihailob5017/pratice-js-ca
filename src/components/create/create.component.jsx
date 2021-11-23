import React from 'react';
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
	return (
		<div className='create-container'>
			<h1 className='create-header'>Create New Post</h1>
			<p className='create-info'>
				<b>Komentar:</b> Api je zahtevao validan User ID da bi napravio novi
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
					<input type='text' />
				</div>
				<div className='likes-container'>
					<label>Like Count: </label>
					<input type='number' />
				</div>
			</div>

			<div className='text-container'>
				<textarea></textarea>
			</div>
			<div className='buttons-container'>
				<button className='create-button'>
					<FileBase type='file' multiple={false} onDone={({ base64 }) => {}} />
					Upload Image
				</button>
				<button className='create-button'>Create Post</button>
				<Link to='/'>
					<button className='create-button'>Go Back</button>
				</Link>
			</div>
		</div>
	);
};

export default Create;
