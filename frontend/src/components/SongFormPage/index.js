import React, { useEffect, useState } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';

import { createSong } from '../../store/song';
import { useHistory } from 'react-router-dom';
import { getUserAlbums } from '../../store/album';
import './SongFormPage.css'

function SongFormPage() {
    //dispatch any action to the store
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [albumId, setAlbumId] = useState(null)
    const [errors, setErrors] = useState([])

    //takes the current state as an argument and returns whatever data you want from it
    const sessionUser = useSelector(state => state.session.user);


    if(!sessionUser) {
        history.push('/login')
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('in handle submit')
        let newErrors = []
        dispatch(createSong({name, url, userId: sessionUser.id, albumId}))
            .then(() => {
                setName("");
                setUrl(null)
                setAlbumId(null)
            })
            .catch(async (res) => {
                const data = await res.json();
                if(data && data.errors) {
                    newErrors = data.errors;
                    setErrors(newErrors)
                }
            })

        // const payload = {
        //     userId: sessionUser.id,
        //     name,
        //     url,
        //     albumId: albumId === 'null' ? null : albumId
        // }


        // dispatch(createSong(payload))
        // history.push(`/songs/${song.id}`)
    }

    const updateFile = (e) => {
        const file = e.target.files[0]
        console.log('this is file inside updateFile',file)
        if (file) setUrl(file);
    }

    const albums = useSelector(state => state.albums.albums)

    useEffect(() => {
        dispatch(getUserAlbums(sessionUser?.id))
    }, [dispatch, sessionUser])

    return (
        <div className='form-container'>

            <form onSubmit={handleSubmit}
            className='song-form'>
                <input type="text"
                    placeholder="Song Title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className='song-title'

                />
                <input type="file"
                    onChange={updateFile}
                    required
                    className='song-url'
                />
                <select name="albums"
                    value={albumId}
                    onChange={(e) => setAlbumId(e.target.value)}>
                    <option value="null" disabled selected>Add to Album</option>
                    <option value="null" defaultValue>None</option>
                    {Array.isArray(albums) && albums?.map((album) => (
                        <option value={`${album.id}`} key={`${album.id}`}>{album.title}</option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SongFormPage;
