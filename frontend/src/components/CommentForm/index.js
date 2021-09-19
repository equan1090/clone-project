import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { createComment } from '../../store/comments';
import './CommentForm.css'
function CommentForm() {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');


    const sessionUser = useSelector(state => state.session.user);
    const id = useParams();

    const handleSubmit = async(e) => {


        const payload = {
            userId: sessionUser.id,
            content,
            songId: id.songId
        }
        await dispatch(createComment(payload, id.songId))

    }

    if(sessionUser){
        return (
            <div id='comment-box'>

                <form onSubmit={handleSubmit}>
                    <textarea name="newComment" id="" cols="30" rows="5"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Comment here"
                    required

                    >
                    </textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    } else{
        return(
            <div id='comment-box'>
                <Link to='/login'>Login </Link>
            </div>
        )
    }
}
export default CommentForm;

