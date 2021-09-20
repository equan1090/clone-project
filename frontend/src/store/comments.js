import { csrfFetch } from './csrf';

const CREATE = 'CREATE_COMMENT'
const LOAD = 'LOAD_COMMENT'


export const load = (comments) => ({
    type: LOAD,
    payload: comments
})

export const newComment = (comment) => {
    return {
        type: CREATE,
        payload: comment
    }
}


export const songComment = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}/comments`)

    if(response.ok) {
        const comments = await response.json();
        dispatch(load(comments))
    }
}

export const createComment = (commentData, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(commentData)
    })
    if(response.ok) {
        const comment = await response.json();
        dispatch(newComment(comment))
        return comment
    }
}

const initialState = {comments:null}

const commentReducer = (state = initialState, action) => {
    let newState;

    switch(action.type) {
        case CREATE:
            newState = {...state}
            console.log('THIS IS ACTION PAYLOAD',action.payload)
            console.log('THIS IS NEW STATE', newState.comments)
            newState.comments.push(action.payload)
            // newState.comments.pop()
            return newState
        case LOAD:
            newState = {...state}
            newState.comments = action.payload;
            return newState
        default:
            return state;
    }
}

export default commentReducer;
