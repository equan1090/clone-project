import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificSong } from "../../store/song";
import { useParams } from "react-router-dom";
import './SongPage.css'
import CommentForm from "../CommentForm";
import DisplayComment from "../DisplayComment";
import { useSongUrl } from "../../context/SongUrl";
function SongPage() {

    const song = useSelector(state => state.songs.songs)
    const params = useParams();
    const dispatch = useDispatch();
    const {setCurrentUrl} = useSongUrl();


    useEffect(() => {

        dispatch(getSpecificSong(params.songId))

    }, [dispatch])

    return (
        <div className='song-content-container'>
            <button className='button play'onClick={() => {
                setCurrentUrl(song?.url);
            }} >{console.log(song?.url)}</button>
                <p>{song && song?.name}</p>
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
