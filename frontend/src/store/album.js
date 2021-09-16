import { csrfFetch } from './csrf';


// THIS IS WHERE BACKEND IS SPEAKING TO FRONT END


const CREATE = 'CREATE_ALBUM'
const ADD = 'ADD_SONG'
const DELETE = 'DELETE_ALBUM'
const LOAD = 'LOAD_ALBUM'

//Action Creators
export const load = (albums) => ({
    type: LOAD,
    albums
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


//Thunks
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

export const getUserAlbums = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/users/${id}/albums`)

    if(response.ok) {
        const albums = await response.json();
        dispatch(load(albums))
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
    const response = await csrfFetch('/api/albums/new', {
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

const initialState = {albums:null}

const albumReducer = (state = initialState, action) => {

    let newState;

    switch(action.type) {

        case CREATE:
            return {
                ...state,
                [action.payload.id] : action.payload
            }

        case LOAD:

            newState = {...state}
            newState.albums = action.albums
            return newState;

        case DELETE:
            return {
                ...state,
                [action.payload.album]: action.payload
            }

        default:
            return state;
    }
}

export default albumReducer;
