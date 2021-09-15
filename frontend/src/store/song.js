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

const load = (list) => ({
    type: LOAD,
    list
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
        const list = await response.json();
        dispatch(load(list))
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


const songReducer = (state, action) => {
    switch(action.type) {
        case ADD:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case LOAD:
            return {
                ...state,
                [action.payload.list]: action.payload
            }
        case DELETE:
            return {
                ...state,
                [action.payload.song]: action.payload
            }

        default:
            console.log('You done messed up if you reached here')
    }
}

export default songReducer;
