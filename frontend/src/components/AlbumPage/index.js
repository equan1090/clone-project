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

    }, [dispatch])


    return(
        <div className='content-container'>
            <div className='profile-header'>

            <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/35798/image/SoundcloudBanner20.jpg"
                    alt="" className='profile-header'/>

            </div>
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
                    {albums && albums?.map((album) => (
                            <li className="each-album" key={album.id}>
                                <Link to={`/albums/${album.id}/songs`} key={`${album.id}`}>
                                    <img src={`${album.imageUrl}`} alt="Image Location" />
                                    {album.title}
                                </Link>
                            </li>
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
