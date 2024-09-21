import { GET_STORIES } from '../actions'

const stories_reducer = (state, action) => {
    switch(action.type) {
        case GET_STORIES:
            return {
                ...state,
                storiesData: action.payload
            }
        default:
            throw new Error('Invalid actions')
    }
}

export default stories_reducer;