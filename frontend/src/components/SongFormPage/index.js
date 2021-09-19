import React, { useEffect, useState } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createSong } from '../../store/song';
import { useHistory } from 'react-router-dom';
import { getUserAlbums } from '../../store/album';


function SongFormPage() {
    //dispatch any action to the store
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [albumId, setAlbumId] = useState('null')

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
            url,
            albumId: albumId === 'null' ? null : albumId
        }

        const song = await dispatch(createSong(payload))
        history.push(`/user/songs/${song.id}`)
    }


    const albums = useSelector(state => state.albums.albums)

    useEffect(() => {
        dispatch(getUserAlbums(sessionUser.id))
    }, [dispatch])

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
            <select name="albums"
                value={albumId}
                onChange={(e) => setAlbumId(e.target.value)}>
                <option value="null" disabled selected>Add to Album</option>
                <option value="null">None</option>
                {Array.isArray(albums) && albums?.map((album) => (
                    <option value={`${album.id}`} key={`${album.id}`}>{album.title}</option>
                ))}
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SongFormPage;
