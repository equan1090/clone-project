import { csrfFetch } from './csrf';


// THIS IS WHERE BACKEND IS SPEAKING TO FRONT END


const CREATE = 'CREATE_ALBUM'
const DELETE = 'DELETE_ALBUM'
const LOAD = 'LOAD_ALBUM'
const UPDATE = 'UPDATE_ALBUM'

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
export const update = (album) => {
    return {
        type: UPDATE,
        payload: album
    }
}


//Thunks
export const getAlbum = () => async(dispatch) => {
    const response = await csrfFetch('/api/albums');
    if(response.ok){
     const albums = await response.json();
     dispatch(load(albums))
    }
};

export const getNewAlbums = () => async(dispatch) => {
    const response = await csrfFetch('/api/albums/created');
    if(response.ok) {
        const albums = await response.json();
        dispatch(load(albums))
    }
}

export const removeAlbum = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/albums/${id}/songs`, {
        method: 'DELETE',
        body: JSON.stringify({id})
    })

    if(response.ok) {
        const item = await response.json();
        await dispatch(deleteAlbum(item))
    }
}

export const getSpecificAlbum = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/albums/${id}`)

    if(response.ok) {
        const album = await response.json();
        dispatch(load(album))
    }
}

export const getUserAlbums = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/users/${id}/albums`)

    if(response.ok) {
        const albums = await response.json();
        dispatch(load(albums))
    }
}

export const updateAlbum = (album, id) => async(dispatch) => {

    const formData = new FormData()
    const {title, imageUrl} = album;
    formData.append('title', title)
    formData.append('imageUrl', imageUrl)

    let response;

    if(typeof imageUrl === 'string'){
        response = await csrfFetch(`/api/albums/${id}`, {
            method: "PATCH",
            body: JSON.stringify(album)
        })
    }else {
        
        response = await csrfFetch(`/api/albums/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formData
        })

    }

    if(response.ok){
        const updatedAlbum = await response.json();
        dispatch(load(updatedAlbum))
        return updatedAlbum
    }
}


export const createAlbum = (albumData) => async (dispatch) => {

    const {userId, title, imageUrl} = albumData
    const formData = new FormData()

    formData.append('title', title)
    formData.append('userId', userId)

    if(imageUrl) formData.append('imageUrl', imageUrl)

    const response = await csrfFetch('/api/albums/new', {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    })

    if(response.ok){
        const newAlbum = await response.json();
        return dispatch(addNewAlbum(newAlbum));
    }
}

const initialState = []

const albumReducer = (state = initialState, action) => {

    let newState;

    switch(action.type) {

        case CREATE:
            return {
                album: action.payload
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
        case UPDATE:
                return {
                    ...state,
                    [action.payload.id]: action.payload
                }

        default:
            return state;
    }
}

export default albumReducer;
