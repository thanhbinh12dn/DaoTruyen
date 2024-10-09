import { GET_STORIES, GET_CATEGORIES } from '../actions'

const stories_reducer = (state, action) => {
    switch(action.type) {
        case GET_STORIES:
            return {
                ...state,
                storiesData: action.payload
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categoriesData: action.payload
            }
        default:
            throw new Error('Invalid actions')
    }
}

export default stories_reducer;