import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAlbum } from '../../store/album';
import './AlbumFormPage.css'

function AlbumFormPage() {
    //dispatch any action to the store
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const history = useHistory();

    //takes the current state as an argument and returns whatever data you want from it
    const sessionUser = useSelector(state => state.session.user);

    if(!sessionUser) {
        history.push('/login')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId: sessionUser.id,
            title,
            imageUrl: image
        }

        await dispatch(createAlbum(payload))

        history.push(`/users/${sessionUser.id}/albums`)

    }
    return (
        <div className='form-container'>
            <div className='album-form'>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        className="album-title"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <input type="text"
                        placeholder='Image Url'
                        className="album-url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default AlbumFormPage;
