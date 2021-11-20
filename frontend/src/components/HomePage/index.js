import React, {useEffect } from 'react';
import { getAlbum} from '../../store/album';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AlbumCard from '../AlbumCard';
import './HomePage.css'
import Navigation from '../Navigation';

function HomePage() {
    const dispatch = useDispatch();

    const albums = useSelector(state => state.albums.albums)
    const newAlbums = albums?.slice(0, 6)
    // const newAlbums = useSelector(state => state.albums.albums)

    useEffect(() => {
        dispatch(getAlbum())
    }, [dispatch])
    // useEffect(() => {
    //     dispatch(getNewAlbums())
    // }, [dispatch])
    console.log('these are my albums', albums)

    return (
        <>
            <div className='content-container home-header'>
                <h2 style={{color:'white'}}>
                    New
                </h2>
                <ul className='home-page-content'>

                    {Array.isArray(newAlbums) && newAlbums?.map((album) => (

                            <AlbumCard album={album}/>
                            // <Link to={`/albums/${album?.id}/songs`} key={`${album?.id}`}>
                            //     {/* <img src={`${album.imageUrl}`} alt="" />
                            //     <li>{album.title}</li> */}
                            // </Link>

                        ))}
                 </ul>
                <div className='discover'>
                    <h2 style={{color:'white'}}>Discover</h2>
                </div>

            </div>
        </>
    )
}

export default HomePage;
