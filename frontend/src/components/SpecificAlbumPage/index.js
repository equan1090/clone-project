import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getAlbumSongs } from "../../store/song";
import { getSpecificAlbum, removeAlbum } from "../../store/album";



function SpecificAlbum() {

    const dispatch = useDispatch();
    const history = useHistory()
    const params = useParams();
    const songs = useSelector(state => state.songs.songs)
    const sessionUser = useSelector(state => state.session.user);
    const album = useSelector(state => state.albums.albums)

    useEffect(() => {
        dispatch(getAlbumSongs(params.albumId))
        // dispatch(getSpecificAlbum(params.albumId))
    }, [dispatch])


    const deleteAlbum = async () => {

        await dispatch(removeAlbum(params.albumId))
        history.push(`/users/${sessionUser.id}/albums`)

    }



    return(
        <div>
            <p>This is in SpecificAlbumPage component</p>
            <ul>
                {songs?.map((song) => (
                    <li key={song.id}>{song.name}</li>
                ))}
             </ul>
            <div>
                <button onClick={deleteAlbum}>
                    Delete Album
                </button>
            </div>
        </div>
    )


}
export default SpecificAlbum;
