import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getAlbumSongs } from "../../store/song";
import { getSpecificAlbum, removeAlbum} from "../../store/album";
import './SpecificAlbumPage.css'



function SpecificAlbum() {

    const dispatch = useDispatch();
    const history = useHistory()
    const params = useParams();
    const songs = useSelector(state => state.songs.songs)
    const sessionUser = useSelector(state => state.session.user);
    const album = useSelector(state => state.albums.albums)
    // const [albumId, setAlbumId] = useState(params.albumId)

    useEffect(() => {
        dispatch(getAlbumSongs(params.albumId))
        dispatch(getSpecificAlbum(params.albumId))
    }, [dispatch, params])



    const deleteAlbum = async () => {

        await dispatch(removeAlbum(params.albumId))
        history.push(`/users/${sessionUser.id}/albums`)

    }
    if(album){

        if(sessionUser && sessionUser.id === album.userId){
            return (
                <div className='song-container'>
                <div className='profile-header'>
                    <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/35798/image/SoundcloudBanner20.jpg"
                        alt="" className='profile-header'/>
                </div>
                    <h1 className='album-header-title'>{album.title}</h1>

                <ul className='song-list'>
                    {Array.isArray(songs) && songs?.map((song) => (
                        <div className='album-song-container' key={song.id}>
                            <Link to={`/songs/${song.id}`}>
                                <img src={album.imageUrl} alt="" />
                                <li>{song.name}</li>
                            </Link>
                        </div>
                    ))}
                 </ul>

                <div className='crud-btn'>
                    <Link to={`/albums/${params.albumId}/edit`}>Edit</Link>

                    <button onClick={deleteAlbum}>
                        Delete Album
                    </button>
                </div>

            </div>
            )
        }else{
            return(
                <div className='song-container'>
                    <div className='profile-header'>
                        <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/35798/image/SoundcloudBanner20.jpg"
                            alt="" className='profile-header'/>
                    </div>
                        <h1 className='album-header-title'>{album.title}</h1>

                    <ul className='song-list'>
                        {Array.isArray(songs) && songs?.map((song) => (
                            <div className='album-song-container' key={song.id}>
                                <Link to={`/songs/${song.id}`}>
                                    <img src={album.imageUrl} alt="" />
                                    <li>{song.name}</li>
                                </Link>
                            </div>
                        ))}
                     </ul>

                </div>
            )
        }



    } else{
        return null;
    }


}
export default SpecificAlbum;
