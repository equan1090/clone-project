import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createComment } from '../../store/comments';

function CommentForm() {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');


    const sessionUser = useSelector(state => state.session.user);
    const id = useParams();

    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            userId: sessionUser.id,
            content,
            songId: id.songId
        }
        await dispatch(createComment(payload, id.songId))

    }

    if(sessionUser){
        return (
            <form onSubmit={handleSubmit}>
                <textarea name="newComment" id="" cols="30" rows="10"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Comment here"
                required
                >
                </textarea>
                <button type='submit'>Submit</button>
            </form>
        )
    } else{
        return(
            <p>Login to comment</p>
        )
    }
}
export default CommentForm;

