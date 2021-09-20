import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch} from 'react-redux';
import { useHistory, useParams} from 'react-router-dom';
import { updateAlbum } from '../../store/album';



function EditFormPage(){

    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const history = useHistory();
    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            title,
            imageUrl
        }


        await dispatch(updateAlbum( payload, params.albumId))
        history.push(`/albums/${params.albumId}/songs`)

    }

    return (
        <form
            onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input type="text"
                placeholder='Image Url'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default EditFormPage;
