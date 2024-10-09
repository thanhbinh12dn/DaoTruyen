import { useState, useRef, useReducer, createContext, useContext } from 'react'

import axios from 'axios'

import { GET_STORIES, GET_CATEGORIES } from '../actions'
import stories_reducer from '../reducers/stories_reducer'
import { stories_url, chapters_url, categories_url } from '../url/stories_url'

const initialState = {
    storiesData: [],
    categoriesData: []
}

const StoriesContext = createContext()

function StoriesProvider({ children }) {
    const [state, dispatch] = useReducer(stories_reducer, initialState)
    const [storiesData, setStoriesData] = useState([])
    const [chaptersData, setChaptersData] = useState([])

    let storyIdRef = useRef()

    const { content } = storiesData

    const getTitleStory = (id) => {
        const story = content.find(s => s.story.id === parseInt(id))
        storyIdRef.current = story
        return storyIdRef.current
    }

    const fetchStories = async (url) => {
        try {
            const response = await axios.get(url)
            const stories = response.data
            setStoriesData(stories)
        }
        catch(error) {
            console.log('stories context errors', error)
        }
    }

    const fetchChapters = async (url) => {
        try {
            const response = await axios.get(url)
            const chapters = response.data
            setChaptersData(chapters)
        }
        catch(error) {
            console.log('stories context errors', error)
        }
    }

    const fetchCategories = async (url) => {
        try {
            const response = await fetch(url)
            if(response.ok) {
                const data = await response.json()
                dispatch({ type: GET_CATEGORIES, payload: data })
            }
        } catch (error) {
            console.log("cant get categories", error)
        }
    }

    console.log('storiesData: ', storiesData)

    return (
        <StoriesContext.Provider
            value={{ ...state, storiesData , storyIdRef, chaptersData, fetchStories, fetchChapters, fetchCategories, getTitleStory }}
        >
            {children}
        </StoriesContext.Provider>
    )   
}

export const useStoriesContext = () => {
    return useContext(StoriesContext)
}

export default StoriesProvider;