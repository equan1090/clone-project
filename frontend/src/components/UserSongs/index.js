import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSongs } from "../../store/song";
import { useParams } from "react-router-dom";

function UserSongs() {
    const dispatch = useDispatch();
    const params = useParams()
    const songs = useSelector(state => state.songs.songs)

    useEffect(() => {
        console.log('*****************POOP****************')
        dispatch(getUserSongs(params.userId))
    }, [dispatch])


    return (
        <div>
            {songs?.map((song) => (
                <ul>
                    <li>
                        {song.name}
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default UserSongs;
