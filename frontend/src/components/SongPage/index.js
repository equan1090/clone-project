import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificSong } from "../../store/song";
import { useParams } from "react-router-dom";
import './SongPage.css'
import CommentForm from "../CommentForm";
import DisplayComment from "../DisplayComment";
import { useSongUrl } from "../../context/SongUrl";
import { getSpecificAlbum } from "../../store/album";
function SongPage() {

    const song = useSelector(state => state.songs.songs)
    const album = useSelector(state => state.albums.albums)
    const params = useParams();
    const dispatch = useDispatch();
    const {setCurrentUrl} = useSongUrl();
    let imageUrl = album?.id===song?.albumId ? album?.imageUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/image-missing-1178918.png';

    useEffect(() => {
        dispatch(getSpecificSong(params.songId))
    }, [dispatch])


    console.log('My album',album)


    return (
        <div className='song-content-container'>
            <div className='song-content-header'>
                <button className='button play'onClick={() => {
                    setCurrentUrl(song?.url);
                }} />
                    <h2>{song && song?.name}</h2>
                    <img src={imageUrl} alt="" className='song-header-image' />
            </div>
            <div>
                <CommentForm />
            </div>
            <div className='comment-container'>
                <DisplayComment />
            </div>
        </div>
    )

}

export default SongPage;
