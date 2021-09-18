import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificSong } from "../../store/song";
import { useParams } from "react-router-dom";
import './SongPage.css'
import Fab from './Fab'

function SongPage() {

    const song = useSelector(state => state.songs.songs)
    const params = useParams();
    const dispatch = useDispatch();
    console.log('******************************',song)
    useEffect(() => {
        dispatch(getSpecificSong(params.songId))
    }, [dispatch])

    return (
        <div className='song-content-container'>
            <div className='song-header'>
                <Fab />
            </div>
                <p>{song && song.name}</p>
        </div>
    )

}

export default SongPage;
