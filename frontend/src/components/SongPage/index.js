import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificSong } from "../../store/song";
import { useParams } from "react-router-dom";
import './SongPage.css'
import Fab from './Fab'
import CommentForm from "../CommentForm";
import DisplayComment from "../DisplayComment";
function SongPage() {

    const song = useSelector(state => state.songs.songs)
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificSong(params.songId))

    }, [dispatch])

    return (
        <div className='song-content-container'>
            <div className='song-header'>
                <Fab />
            </div>
                <p>{song && song.name}</p>
            <div>
                <CommentForm />
            </div>
            <div>
                <DisplayComment />
            </div>
        </div>
    )

}

export default SongPage;
