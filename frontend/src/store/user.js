import { csrfFetch } from './csrf';


const LOAD = 'LOAD_USER'
const EDIT = 'EDIT_USER'

export const edit = (user) => ({
    type: EDIT,
    payload: user
})

export const load = (user) => ({
    type: LOAD,
    payload: user
})

export const editUser = (user) => async(dispatch) => {
    console.log('this is user in store', user)
    const formData = new FormData()
    const {userId, username, email, image} = user;
    formData.append('userId', userId)
    formData.append('username', username)
    formData.append('email', email)
    formData.append('image', image)

    let response;
    if(typeof image === 'string'){
        response = await csrfFetch(`/api/users/${user.userId}`, {
            method: "PATCH",
            body: JSON.stringify(user)
        });
    }else {
        response = await csrfFetch(`/api/users/${user.userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formData,
        })

    }
    console.log('got a response\n\n\n')

    if(response.ok) {
        const edittedUser = await response.json();
        dispatch(load(edittedUser))
        return edittedUser
    }else {
        return 'ERROR IN EDITEDUSER'
    }
}

export const getUser = (id) => async(dispatch) => {

    const response = await csrfFetch(`/api/users/${id}`)

    if(response.ok) {
        const user = await response.json();
        dispatch(load(user));
    }
}

const initialState = []
const userReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOAD:

            return {
                user: action.payload
            }
        default:
            return state;
    }


}

export default userReducer;
