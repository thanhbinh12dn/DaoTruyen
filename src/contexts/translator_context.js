import { createContext, useContext, useReducer } from "react"

import axios from "axios"

import translator_reducer from '../reducers/translator_reducer'

const initialState = {
    teamTranslateData: null
}

const TranslatorContext = createContext()

function TranslatorProvider({ children }) {
    const [state, dispatch] = useReducer(translator_reducer, initialState)

    const fetchCreateTeamTranslate = async (url, body) => {
        try {
            const response = await axios.post(url, body)
            if(response) {
                console.log('create team translate', response)
            }
        } catch (error) {
            console.log('Invalid create team translate: ', error)
        }
    }

    return (
        <TranslatorContext.Provider value={{ fetchCreateTeamTranslate }}>
            {children}
        </TranslatorContext.Provider>
    )
}

export const useTranslatorContext = () => {
    return useContext(TranslatorContext) 
}

export default TranslatorProvider;