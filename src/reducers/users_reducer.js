import { GET_USER, REQUEST_REGISTER_TRANSLATOR } from '../actions'

const users_reducer = (state, action) => {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                userInfo: action.payload
            }
        case REQUEST_REGISTER_TRANSLATOR:
            return {
                ...state,
                requestedRegister: action.payload
            }
        default:
            throw new Error('Invalid actions')
    }
}

export default users_reducer;