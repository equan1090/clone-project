import { csrfFetch } from "./csrf"
const ADD = 'ADD_SONG'
const DELETE = 'DELETE_SONG'
const LOAD = 'LOAD_SONG'


const add = (song) => {
    return {
        type: ADD,
        payload: song
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
    console.log('inside createSong thunk')
    const {name, url, userId, albumId} = songData
    // console.log('this is name', name)
    // console.log('this is url', url)
    // console.log('this is userId', userId)
    // console.log('this is albumId', albumId)
    const formData = new FormData()
    formData.append('name', name)
    formData.append('userId', userId)
    formData.append('albumId', albumId)

    if (url) formData.append('url', url)
    console.log('before res')
    const res = await csrfFetch(`/api/songs`, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    })
    console.log('after res')

    const data = await res.json()
    console.log('got a res back in store for createsong')
    dispatch(add(data))







    // const response = await csrfFetch('/api/songs', {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(songData)
    // })

    // if(response.ok) {
    //     const newSong = await response.json();
    //     dispatch(add(newSong))
    //     return newSong
    // }
}

export const deleteSong = () => async(dispatch) => {

    const response = await csrfFetch('/api/songs/:songId')
    if(response.ok) {
        const song = await response.json();
        dispatch(remove(song))
    }

}

export const getSpecificSong = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}`)

    if(response.ok) {
        const song = await response.json();
        dispatch(load(song))
    }
}

export const getUserSongs = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/users/${id}/songs`)

    if(response.ok) {
        const songs = await response.json()
        dispatch(load(songs))
    }
}

// const initialState= {songs:null}
const initialState = []
const songReducer = (state = initialState, action) => {


    let newState = {...state};

    switch(action.type) {
        case ADD:
            return {
                song: action.payload
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
