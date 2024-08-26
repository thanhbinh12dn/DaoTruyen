import config from '../config'

import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'

const publicRoutes = [
    {
        path: config.routes.home, component: Home, layout: null
    },
    {
        path: config.routes.login, component: Login, layout: null
    },
    {
        path: config.routes.register, component: Register, layout: null
    }
]

export { publicRoutes }