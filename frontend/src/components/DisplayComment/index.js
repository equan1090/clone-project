import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { songComment } from '../../store/comments';

function DisplayComment () {
    const dispatch = useDispatch();
    const id = useParams();
    const comments = useSelector(state => state.comments.comments)

    useEffect(() => {
        dispatch(songComment(id.songId))
       
    }, [dispatch, id])

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
