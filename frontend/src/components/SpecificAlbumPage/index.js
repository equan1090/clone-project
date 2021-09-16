import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAlbumSongs } from "../../store/song";

function SpecificAlbum() {

    const dispatch = useDispatch();
    const params = useParams();
    const songs = useSelector(state => state.songs.songs)

    useEffect(() => {
        dispatch(getAlbumSongs(params.albumId))
    }, [dispatch])

    return(
        <div>
            {songs?.map((song) => (
                <ul>
                    <p>This is in SpecificAlbumPage comonent</p>
                    <li>{song.name}</li>
                </ul>
            ))}
        </div>
    )


}
export default SpecificAlbum;
