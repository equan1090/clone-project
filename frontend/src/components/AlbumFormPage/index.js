import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAlbum, load } from '../../store/album';
import './AlbumFormPage.css'
import ProfileButton from '../Navigation/ProfileButton';
import Navigation from '../Navigation';
import ScaleLoader from 'react-spinners/ScaleLoader'
function AlbumFormPage() {
    //dispatch any action to the store
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    //takes the current state as an argument and returns whatever data you want from it
    const sessionUser = useSelector(state => state.session.user);

    // if(!sessionUser) {
    //     history.push('/login')
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let errors = []
        const acceptedTypes = ['png', 'jpeg', 'jpg']

        let fileArr = image ? image.name.split('.') : null
        let fileType = image ? fileArr[fileArr.length - 1]: null

        if(!image) errors.push('Please provide an album image')
        if(image && !acceptedTypes.includes(fileType)) errors.push('Image must be either a png or jpeg')
        if(title.length > 30 || title.length < 4) errors.push('Title must be between 4-30 characters')

        if(errors.length) {

            setErrors(errors)
            return null
        }
        setErrors('')

        const payload = {
            userId: sessionUser.id,
            title,
            imageUrl: image
        }
        setLoading(true)
        await dispatch(createAlbum(payload))
            .then(() => {
                setTitle("")
                setImage(null)
            })
        setLoading(false)
        // await dispatch(createAlbum(payload))

        history.push(`/users/${sessionUser.id}`)

    }

    const updateFile = (e) => {
        const file = e.target.files[0]

        if (file) setImage(file)
    }

    return (
        <div className='album-form-wrapper'>
            <Navigation />
            <ProfileButton user={sessionUser} />
            <div className='create-album-container'>
                <div className='album-form'>
                    <form id='create-album-form' onSubmit={handleSubmit}>
                        <input type="text"
                            className="input"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <input type="file"
                        className='input'
                            onChange={updateFile}
                            required
                        />
                        <button id='create-album-btn' type='submit'>Submit</button>
                    </form>
                </div>
                    <p id='note'>*Note* Must create an album before uploading songs</p>
                    {errors && errors.map((error, ind) => (
                            <div className='errors' key={ind}>
                                {error}
                            </div>
                        ))}
                    <div className='loading-screen'>
                        {loading && (
                            <ScaleLoader
                            color={"#F37A24"}
                            size={150} />
                        )}

                    </div>
            </div>
        </div>
    )
}


export default AlbumFormPage;
