import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { songComment } from '../../store/comments';
import { getUser } from '../../store/user';
function DisplayComment () {
    const dispatch = useDispatch();
    const id = useParams();
    const comments = useSelector(state => state.comments.comments)
    const user = useSelector(state => state.users.user);



    useEffect(() => {
        dispatch(songComment(id.songId))
        // dispatch(getUser(1))
    }, [dispatch])

    return(
        

        <div>
            {Array.isArray(comments) && comments.map((comment) => (
                <div key={comment.id}>
                    {comment?.content}
                </div>
            ))}

        </div>
    )
}

export default DisplayComment
