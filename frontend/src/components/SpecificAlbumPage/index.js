import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getAlbumSongs } from "../../store/song";
import { getSpecificAlbum, removeAlbum, getUserAlbums, updateAlbum } from "../../store/album";



function SpecificAlbum() {

    const dispatch = useDispatch();
    const history = useHistory()
    const params = useParams();
    const songs = useSelector(state => state.songs.songs)
    const sessionUser = useSelector(state => state.session.user);
    // const albums = useSelector(state => state.albums.albums)
    // const [albumId, setAlbumId] = useState(params.albumId)

    useEffect(() => {
        dispatch(getAlbumSongs(params.albumId))
    }, [dispatch])




    const deleteAlbum = async () => {

        // dispatch(getSpecificAlbum(params.albumId))
        await dispatch(removeAlbum(params.albumId))
        history.push(`/users/${sessionUser.id}/albums`)

    }

    return(
        <div>
            <h1></h1>
            <ul>
                {songs?.map((song) => (
                    <div className='album-song-container'>
                        <img src="" alt="" />
                        <li key={song.id}>{song.name}</li>
                    </div>
                ))}
             </ul>
            <div>
                <Link to={`/albums/${params.albumId}/edit`}>Edit</Link>

                <button onClick={deleteAlbum}>
                    Delete Album
                </button>
            </div>
        </div>
    )


}
export default SpecificAlbum;
