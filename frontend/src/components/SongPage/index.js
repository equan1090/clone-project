import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificSong } from "../../store/song";
import { useParams } from "react-router-dom";

function SongPage() {

    const song = useSelector(state => state.songs.songs)
    const params = useParams();
    const dispatch = useDispatch();
    console.log('******************************',song)
    useEffect(() => {
        dispatch(getSpecificSong(params.songId))
    }, [dispatch])
    
    return (
        <p>{song && song.name}</p>
    )

}

export default SongPage;
