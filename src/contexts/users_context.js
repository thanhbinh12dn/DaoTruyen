import { useEffect, createContext, useContext, useReducer, useState } from "react"

import axios from "axios"

import users_reducer from '../reducers/users_reducer'
import { users_url, regis_translater_url } from "../url/users_url"
import { GET_USER, REQUEST_REGISTER_TRANSLATOR } from '../actions'

const initialState = {
    userInfo: null,
    requestedRegister: false
}

const UserContext = createContext()

function UserProvider({ children }) {
    const [state, dispatch] = useReducer(users_reducer, initialState)

    const fetchUser = async () => {
        try {
            const userTokenString = localStorage.getItem("accessToken")
            const userToken = JSON.parse(userTokenString)
            const response = await axios.get(`${users_url}/${userToken}`, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            })
            if(response) {
                dispatch({ type: GET_USER, payload: response.data.userInfo })
                console.log('get User: ', response.data)
            }
        } catch (error) {
            console.log('Invalid get user: ', error)
        }
    }

    const fetchRegisterStoryTranslator = (accessToken, userToken) => {
        if(accessToken) {
            fetch(`${regis_translater_url}?token=${userToken}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            })
            .then((res) => {
                if(res.ok) {
                    dispatch({ type: REQUEST_REGISTER_TRANSLATOR, payload: true })
                }
            })
            .catch((error) => {
                console.log('Invalid request resgister translator ', error)
            })
        }
    }

    console.log('state user info: ', state)

    return (
        <UserContext.Provider value={{ ...state, fetchUser, fetchRegisterStoryTranslator }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext) 
}

export default UserProvider;