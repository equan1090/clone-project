import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createSong } from '../../store/song';
import { useHistory } from 'react-router-dom';


function SongFormPage() {
    //dispatch any action to the store
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')

    //takes the current state as an argument and returns whatever data you want from it
    const sessionUser = useSelector(state => state.session.user);


    if(!sessionUser) {
        history.push('/login')
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const payload = {
            userId: sessionUser.id,
            name,
            url
        }

        await dispatch(createSong(payload))

    }

    if(!sessionUser) {
        <Redirect to='/login' />
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Song Title"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input type="text"
                placeholder='URL'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SongFormPage;
