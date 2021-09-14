import { csrfFetch } from './csrf';


// THIS IS WHERE BACKEND IS SPEAKING TO FRONT END


const CREATE = 'CREATE_ALBUM'
const ADD = 'ADD_SONG'
const DELETE = 'DELETE_ALBUM'
const LOAD = 'LOAD_ALBUM'

const load = list => ({
    type: LOAD,
    list
})

export const deleteAlbum = (album) => {
    return {
        type: DELETE,
        payload: album
    }
}

export const addNewAlbum = (newAlbum) => {
    return {
        type: CREATE,
        payload: newAlbum
    }
}

// export const addSong = (newSong) => {
//     return {
//         type: ADD,
//         payload: newSong
//     }
// }

export const getAlbum = () => async(dispatch) => {
    const response = await csrfFetch('/api/album');

    if(response.ok){
     const list = await response.json();
     dispatch(load(list))
    }
};

export const removeAlbum = () => async(dispatch) => {
    const response = await csrfFetch('/api/album/:albumId')

    if(response.ok) {
        const item = await response.json();
        dispatch(deleteAlbum(item))
    }
}

export const getSpecificAlbum = () => async(dispatch) => {
    const response = await csrfFetch('/api/album/:albumId')

    if(response.ok) {
        const list = await response.json();
        dispatch(load(list))
    }
}


// export const newSong = (songData) => async(dispatch) => {
//     const response = await csrfFetch(`/api/album/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(songData)
//     })

//     if(response.ok) {
//         const song = await response.json();
//         dispatch(addSong(song))
//         return song;
//     }
// }

export const createAlbum = (albumData) => async (dispatch) => {
    const response = await csrfFetch('/api/album', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(albumData)
    })

    if(response.ok){
        const newAlbum = await response.json();
        dispatch(addNewAlbum(newAlbum));
        return newAlbum
    }
}


const albumReducer = (state, action) => {
    switch(action.type) {
        case CREATE:
            return {
                ...state,
                [action.payload.id] : action.payload
            }
        case LOAD:
            return {
                ...state,
                [action.payload.list]: action.payload
            }
        case DELETE:
            return {
                ...state,
                [action.payload.album]: action.payload
            }

        default:
            console.log('hello')
    }
}

export default albumReducer;
