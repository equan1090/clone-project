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
    const album = useSelector(state => state.albums.albums)
    // const [albumId, setAlbumId] = useState(params.albumId)

    useEffect(() => {
        dispatch(getAlbumSongs(params.albumId))
        dispatch(getSpecificAlbum(params.albumId))
    }, [dispatch])



    const deleteAlbum = async () => {

        await dispatch(removeAlbum(params.albumId))
        history.push(`/users/${sessionUser.id}/albums`)

    }
    if(album){
        return(
            <div>
                <h1>{album.title}</h1>
                <ul>
                    {Array.isArray(songs) && songs?.map((song) => (
                        <div className='album-song-container' key={song.id}>
                            <Link to={`/songs/${song.id}`}>
                                <img src={album.imageUrl} alt="Album Picture" />
                                <li>{song.name}</li>
                            </Link>
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
    } else{
        return null;
    }


}
export default SpecificAlbum;
