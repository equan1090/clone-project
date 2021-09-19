import React, { useState, useEffect } from 'react';
import { getAlbum } from '../../store/album';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './HomePage.css'

function HomePage() {
    const dispatch = useDispatch();

    const albums = useSelector(state => state.albums.albums)

    useEffect(() => {
        dispatch(getAlbum())
    }, [dispatch])

    return (
        <>
            <div className='content-container home-header'>
                <h1>Welcome to Tune Cloud</h1>
                <p>This app is a clone of SoundCloud for learning purposes only.</p>
                <ul className='home-page-content'>
                {Array.isArray(albums) && albums?.map((album) => (
                            <li className="each-album" key={album.id}>
                                <Link to={`/albums/${album.id}/songs`} key={`${album.id}`}>
                                    <img src={`${album.imageUrl}`} alt="Image Location" />
                                    {album.title}
                                </Link>
                            </li>
                    ))}
                 </ul>
                <div className='discover'>

                </div>

            </div>
        </>
    )
}

export default HomePage;
