import { GET_USER } from '../actions'

const users_reducer = (state, action) => {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                userData: action.payload
            }
        default:
            throw new Error('Invalid actions')
    }
}

export default users_reducer;