import config from '../config'

import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import StoryDetail from '../components/StoryDetail'
import HeaderOnly from '../components/HeaderOnly'
import ReadStory from '../components/ReadStory'

const publicRoutes = [
    {
        path: config.routes.home, component: Home, layout: null
    },
    {
        path: config.routes.login, component: Login, layout: null
    },
    {
        path: config.routes.register, component: Register, layout: null
    },
    {
        path: config.routes.storyDetail, component: StoryDetail, layout: HeaderOnly
    },
    {
        path: config.routes.readStory, component: ReadStory, layout: HeaderOnly
    }
]

export { publicRoutes }