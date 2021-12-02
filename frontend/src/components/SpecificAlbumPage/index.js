import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getAlbumSongs} from "../../store/song";
import { getSpecificAlbum, removeAlbum} from "../../store/album";
import './SpecificAlbumPage.css'
import Navigation from "../Navigation";
import ProfileButton from "../Navigation/ProfileButton";
import { useSongUrl } from "../../context/SongUrl";
import deleteIcon from '../../images/delete.png'
import editIcon from '../../images/edit-icon.png'

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


    const deleteAlbum = async () => {

        await dispatch(removeAlbum(params?.albumId))
        history.push(`/users/${sessionUser.id}`)

    }
    // const handleDeleteSong = (songId) => {
    //     dispatch(deleteSong(songId))
    // }

    const AlbumOwner = () => {

        if(sessionUser?.id === album?.userId){
            return (
                <>
                <div className='edit-album'
                onClick={() => history.push(`/albums/${params.albumId}/edit`)}
                >
                    <p>Edit</p>
                </div>
                 <div className='crud-btn'>
                     <button id='delete-album-btn' onClick={deleteAlbum}>
                         Delete Album
                     </button>
                 </div>
                </>
            )
        }else{
            return null
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
                <AlbumOwner />
                <h1 id='album-title'>{album?.title}</h1>
            </div>
            <div className='song-list'>

                <div id='song-column'>
                    <p># &nbsp;&nbsp;&nbsp; Title</p>
                </div>
                <ol>
                    {songs?.map((song, idx) => (
                        <div className='each-song-container'>
                            <div className='each-song' onClick={() => {
                                setCurrentUrl(song?.url)}}>
                                <div>
                                    {idx + 1}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{song.name}
                                </div>
                            </div>
                            {/* <div className='song-edit'>
                                <button className='delete-song'
                                    onClick={handleDeleteSong(song.id)}
                                >
                                    <img id='delete-img' src={deleteIcon} alt="" />
                                </button>
                            </div> */}
                        </div>
                    ))}
                </ol>
            </div>
            <div className="more-album">

            </div>
        </div>

        )





}
export default SpecificAlbum;
