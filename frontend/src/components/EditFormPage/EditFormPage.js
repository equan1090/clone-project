import React, { useState, useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams} from 'react-router-dom';
import { updateAlbum } from '../../store/album';
import './EditFormPage.css'
import { getSpecificAlbum } from '../../store/album';


function EditFormPage(){

    const dispatch = useDispatch();
    const album = useSelector(state => state?.albums?.albums)
    const [title, setTitle] = useState(album?.title)
    const [imageUrl, setImageUrl] = useState(album?.imageUrl)
    const [errors, setErrors] = useState([])
    const history = useHistory();
    const params = useParams();
    const [imageLoading, setImageLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        let errors = []
        const acceptedTypes = ['png', 'jpeg', 'jpg']

        let fileArr;
        let fileType;

        if(typeof imageUrl === 'object') {
            fileArr = imageUrl ? imageUrl.name.split('.') : null
            fileType = imageUrl ? fileArr[fileArr.length - 1]: null
        }

        if(!(typeof imageUrl === 'string') && imageUrl && !acceptedTypes.includes(fileType)) errors.push('Image must be either a png or jpeg')
        if(title.length < 4 || title.length > 30) errors.push('Username must be between 3-30 chars')

        if(errors.length) {
            setErrors(errors)
            console.log(errors)
            return null
        }


        const payload = {
            title,
            imageUrl
        }

        setImageLoading(true)
        await dispatch(updateAlbum( payload, params.albumId))
        setImageLoading(false)
        history.push(`/albums/${params.albumId}/songs`)

    }
    const updateFile = (e) => {
        const file = e.target.files[0]
        console.log('this is fule in update file', file)
        if (file) setImageUrl(file);
    }

    useEffect(() => {
        dispatch(getSpecificAlbum(params.albumId))
    }, [dispatch])
    return (
        <div className='album-edit-wrapper'>
            <div className='album-edit-container'>
                <form
                    className='album-edit-form'
                    onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <input type="file"
                    name='image'
                    onChange={updateFile}
                    />
                    <button type='submit'>Submit</button>
                </form>
                {imageLoading && (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default EditFormPage;
