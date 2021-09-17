import { csrfFetch } from './csrf';



const ADD = 'ADD_SONG'
const DELETE = 'DELETE_SONG'
const LOAD = 'LOAD_SONG'


const add = (newSong) => {
    return {
        type: ADD,
        payload: newSong
    }
}

const load = (songs) => ({
    type: LOAD,
    songs
})

const remove = (song) => {
    return {
        type: DELETE,
        payload: song
    }
}


export const getSongs = () => async(dispatch) => {
    const response = await csrfFetch('/api/songs');
    if(response.ok) {
        const songs = await response.json();
        dispatch(load(songs))
    }
}
export const getAlbumSongs = (albumId) => async(dispatch) => {
    const response = await csrfFetch(`/api/albums/${albumId}/songs`)

    if(response.ok) {
        const songs = await response.json();
        dispatch(load(songs))
    }

}

export const createSong = (songData) => async (dispatch) => {
    const response = await csrfFetch('/api/songs', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(songData)
    })

    if(response.ok) {
        const newSong = await response.json();
        dispatch(add(newSong))
        return newSong
    }
}

export const deleteSong = () => async(dispatch) => {

    const response = await csrfFetch('/api/songs/:songId')


    if(response.ok) {
        const song = await response.json();
        dispatch(remove(song))
    }

}

export const getUserSongs = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/users/${id}/songs`)

    if(response.ok) {
        const songs = await response.json()
        dispatch(load(songs))
    }
}

const initialState= {songs:null}
const songReducer = (state = initialState, action) => {


    let newState;

    switch(action.type) {
        case ADD:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case LOAD:

            newState = {...state}
            newState.songs = action.songs
            return newState

        case DELETE:
            return {
                ...state,
                [action.payload.song]: action.payload
            }

        default:
            return state
    }
}

export default songReducer;
