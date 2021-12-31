import React, {useEffect, useState } from 'react';
import { getAlbum} from '../../store/album';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AlbumCard from '../AlbumCard';
import './HomePage.css'
import ProfileButton from '../Navigation/ProfileButton';
import Navigation from '../Navigation';
function HomePage() {
    const dispatch = useDispatch();
    let newAlbums = [];
    let discover = [];

    const albums = useSelector(state => state?.albums?.albums)
    const sessionUser = useSelector(state => state.session.user);


    useEffect(() => {
        dispatch(getAlbum())
    }, [dispatch])

    return (
        <>
            <div className='content-container home-header'>
                <Navigation />
                <ProfileButton user={sessionUser} />
                <h2 style={{color:'white'}}>
                    Albums
                </h2>
                <ul className='home-page-content'>

                    {Array.isArray(albums) && albums?.map((album) => (
                            <AlbumCard album={album} userId={album.userId}/>
                        ))}
                 </ul>


            </div>
        </>
    )
}

export default HomePage;
