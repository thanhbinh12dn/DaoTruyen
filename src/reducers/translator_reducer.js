import { CREATE_TEAM_TRANSLATE } from '../actions'

const translator_reducer = (state, action) => {
    switch(action.type) {
        case CREATE_TEAM_TRANSLATE:
            return {
                ...state,
                teamTranslateData: action.payload
            }
        default:
            throw new Error('Invalid actions')
    }
}

export default translator_reducer;