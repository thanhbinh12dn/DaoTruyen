import { userEffect, createContext, useContext, useReducer, useEffect, useState } from "react"

import axios from "axios"

import users_reducer from '../reducers/users_reducer'
import { users_url } from "../url/users_url"

const initialState = {
    userData: null
}

const UserContext = createContext()

function UserProvider({ children }) {
    const [state, dispatch] = useReducer(users_reducer, initialState)
    const [userToken, setUserToken] = useState(JSON.parse(localStorage.getItem("accessToken")))

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        // console.log(userTokenString)
        // console.log('get userToken: ', userToken)
        // console.log('userToken url:',`${users_url}/$\{${userToken}\}`)
        // try {
        //     const response = await axios.get(`${users_url}/$` + JSON.parse(userTokenString))
        //     if(response) {
        //         console.log('get User: ', response)
        //     }
        // } catch (error) {
        //     console.log('Invalid get user: ', error)
        // }
    }

    return (
        <UserContext.Provider value={{ ...state }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext) 
}

export default UserProvider;