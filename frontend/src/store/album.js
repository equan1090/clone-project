import { csrfFetch } from './csrf';

const ADD = 'CREATE/ALBUM'

export const addNewAlbum = (newAlbum) => {
    return {
        type: ADD,
        payload: newAlbum
    }
}

export const createAlbum = (albumData) => async (dispatch) => {
    const response = await csrfFetch('/api/album', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(albumData)
    })

    if(response.ok){
        const newAlbum = await response.json();
        dispatch(newAlbum);
        return newAlbum
    }
}


const albumReducer = (state, action) => {
    switch(action.type) {
        case ADD:
            return {
                ...state,
                [action.payload.id] : action.payload
            }

    }
}

export default albumReducer;
