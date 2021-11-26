import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAlbums } from "../../store/album";
import { useParams, Link } from "react-router-dom";


import './AlbumPage.css'


function AlbumPage() {

    const dispatch = useDispatch();
    const params = useParams()
    const albums = useSelector(state => state.albums.albums);


    useEffect(() => {
        dispatch(getUserAlbums(params.userId))
    }, [dispatch, params])


    return(
        <div className='content-container'>

            <div className='profile-page-nav'>
                <ul className='profile-page-tabs'>
                    <li>
                        <Link to={`/users/${params.userId}/albums`}>Albums</Link>
                    </li>
                    <li>
                        <Link to={`/users/${params.userId}/songs`}>Tracks</Link>
                    </li>

                </ul>
            </div>
            <div className='content'>
                <ul className="user-albums">
                    {Array.isArray(albums) && albums?.map((album) => (
                        <div>
                            <li className="each-album" key={album.id}>
                                <Link to={`/albums/${album.id}/songs`} key={`${album.id}`}>
                                    <img src={`${album.imageUrl}`} alt="" />
                                </Link>
                            </li>
                            <li className='album-title'>
                                {album.title}
                            </li>
                            </div>
                    ))}
                </ul>
                <div>
                    <Link to='/albums/new'>Create Album</Link>
                </div>
            </div>
        </div>
    )

}

export default AlbumPage;
