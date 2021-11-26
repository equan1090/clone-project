import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getAlbumSongs } from "../../store/song";
import { getSpecificAlbum, removeAlbum} from "../../store/album";
import './SpecificAlbumPage.css'
import Navigation from "../Navigation";
import ProfileButton from "../Navigation/ProfileButton";
import { useSongUrl } from "../../context/SongUrl";

function SpecificAlbum() {

    const {setCurrentUrl} = useSongUrl();

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
    console.log('this is songs', songs)

    const deleteAlbum = async () => {

        await dispatch(removeAlbum(params?.albumId))
        history.push(`/users/${sessionUser.id}/albums`)

    }

    const AlbumOwner = () => {
        if(sessionUser?.id === album?.userId){
            return (
                <div className='crud-btn'>
                    <Link to={`/albums/${params.albumId}/edit`}>Edit</Link>

                    <button onClick={deleteAlbum}>
                        Delete Album
                    </button>
                </div>
            )
        }
    }

    return (
        <div className="container">
            <div className="Navigation">
                <Navigation />
            </div>
            <div className="album-profile-header">
                <ProfileButton user={sessionUser} />
                <img id='album-image' src={album?.imageUrl} alt="" />
                <h1 id='album-title'>{album?.title}</h1>
            </div>
            <div className='song-list'>
                <div id='song-column'>
                    <p># &nbsp;&nbsp;&nbsp; Title</p>
                </div>
                <ol>
                    {songs?.map((song, idx) => (
                        <div className='each-song' onClick={() => {
                            setCurrentUrl(song?.url)
                        }}>
                            <div>
                                {idx + 1}
                            </div>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{song.name}</div>
                        </div>
                    ))}
                </ol>
            </div>
            <div className="more-album">

            </div>
        </div>
            // <div className='song-container'>
            //     <div className='album-profile-header'>
            //         <img id='album-image' src={album?.imageUrl} alt="" />
            //         <div className='album-info'>
            //             <h1 id='album-title'>{album?.title}</h1>
            //         </div>
            //     </div>

            //     <div className='song-list'>
            //         <p>Hello</p>
            //     </div>


            // { <ul className='song-list'>
            //     {Array.isArray(songs) && songs?.map((song) => (
            //         <div className='album-song-container' key={song.id}>
            //             <Link to={`/songs/${song.id}`}>
            //                 <img src={album.imageUrl} alt="" />
            //                 <li>{song.name}</li>
            //             </Link>
            //         </div>
            //     ))}
            //  </ul>}



        // </div>
        )

        // else{
        //     return(
        //         <div className='song-container'>
        //             <div className='profile-header'>
        //                 <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/35798/image/SoundcloudBanner20.jpg"
        //                     alt="" className='profile-header'/>
        //             </div>
        //                 <h1 className='album-header-title'>{album.title}</h1>

        //             <ul className='song-list'>
        //                 {Array.isArray(songs) && songs?.map((song) => (
        //                     <div className='album-song-container' key={song.id}>
        //                         <Link to={`/songs/${song.id}`}>
        //                             <img src={album.imageUrl} alt="" />

        //                             <li>{song.name}</li>
        //                         </Link>
        //                     </div>
        //                 ))}
        //              </ul>

        //         </div>
        //     )
        // }



}
export default SpecificAlbum;
