import { csrfFetch } from './csrf';


const LOAD = 'LOAD_USER'

export const load = (user) => ({
    type: LOAD,
    payLoad: user
})

export const getUser = (id) => async(dispatch) => {

    const response = await csrfFetch(`/api/users/${id}`)

    if(response.ok) {
        const user = await response.json();
        dispatch(load(user));
    }
}

const initialState = {users:null}
const userReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOAD:
            return {
                ...state,
                [action.payload.user]: action.payload
            }
        default:
            return state;
    }


}

export default userReducer;
