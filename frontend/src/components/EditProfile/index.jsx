import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {getUser} from '../../store/user'
import { editUser } from "../../store/user";
import './EditProfile.css'
function EditProfile() {
    const dispatch = useDispatch()
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const [username, setUsername] = useState(sessionUser?.username)
    const [email, setEmail] = useState(sessionUser?.email)
    const [image, setImage] = useState(sessionUser?.image)
    const [errors, setErrors] = useState([])
    const user = useSelector(state => state.users.user)
    const [imageLoading, setImageLoading] = useState(false)

    useEffect(() => {
        dispatch(getUser(sessionUser?.id))
    }, [dispatch])

    const updateFile = (e) => {
        const file = e.target.files[0]
        console.log('this is profile image', file)
        if (file) setImage(file);
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        let errors = []
        const acceptedTypes = ['png', 'jpeg', 'jpg']

        let fileArr;
        let fileType;

        if(typeof image === 'object') {
            fileArr = image ? image.name.split('.') : null
            fileType = image ? fileArr[fileArr.length - 1]: null
        }

        if(!(typeof image === 'string') && image && !acceptedTypes.includes(fileType)) errors.push('Image must be either a png or jpeg')
        if(username.length < 4 || username.length > 30) errors.push('Username must be between 3-30 chars')

        if(errors.length) {
            setErrors(errors)
            console.log(errors)
            return null
        }

        setErrors('')

        const payload = {
            userId: sessionUser?.id,
            username,
            email,
            image,
        }

        console.log('payload front end', image)
        setImageLoading(true)
        await dispatch(editUser(payload))
        setImageLoading(false)


        history.push(`/users/${sessionUser?.id}`)

    }

    return(
        <div className='profile-edit-wrapper'>
            <div className='profile-edit-container'>
                <form className='edit-profile-form' onSubmit={handleSubmit}>
                    <div className='each-input input-container'>
                        <label htmlFor="username">Username</label>
                        <input type="text"
                        name='username'
                        className='input'
                        onChange={(e) => {setUsername(e.target.value)}}
                        value={username}
                        required={true}
                        />
                    </div>
                    <div className='each-input input-container'>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                        className='input'
                        name='email'
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        required={true}
                        />

                    </div>
                    <div>
                        <input type="file"
                        name='image'
                        onChange={updateFile}
                        />
                    </div>
                        <button id='edit-profile-btn' type='submit'>Edit</button>
                </form>
                {imageLoading && (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}
export default EditProfile;
