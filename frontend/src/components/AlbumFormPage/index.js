import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAlbum } from '../../store/album';

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

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input type="text"
                placeholder='Image Url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
            />
            <button type='submit'>Submit</button>
        </form>
    )
}


export default AlbumFormPage;
