import config from '../config'

import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Admin from '../pages/Admin/Admin'
import StoryDetail from '../components/StoryDetail'
import HeaderOnly from '../components/HeaderOnly'
import ReadStory from '../components/ReadStory'
import ConfirmEmail from '../components/ConfirmEmail'
import DefaultProfile from '../pages/Profile/DefaultProfile'
import Info from '../pages/Profile/Info'
import ChangePassword from '../pages/Profile/ChangePassword'
import ManageStory from '../pages/Profile/MagageStory'
import RegisterStoryTranslator from '../pages/Profile/RegisterStoryTranslator'
import TeamTranslator from '../pages/Translator/TeamTranslator'
import ForgetPassword from '../components/ForgetPassword'
import TestApi from '../components/TestApi'

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
        path: config.routes.forgetPassword, component: ForgetPassword, layout: HeaderOnly
    },
    {
        path: config.routes.storyDetail, component: StoryDetail, layout: HeaderOnly
    },
    {
        path: config.routes.readStory, component: ReadStory, layout: HeaderOnly
    },
    {
        path: config.routes.confirmEmail, component: ConfirmEmail, layout: HeaderOnly
    },
    {
        path: config.routes.info, component: Info, layout: DefaultProfile
    },
    {
        path: config.routes.changePassword, component: ChangePassword, layout: DefaultProfile
    },
    {
        path: config.routes.manageStory, component: ManageStory, layout: DefaultProfile
    },
    {
        path: config.routes.registerStoryTranslator, component: RegisterStoryTranslator, layout: DefaultProfile
    },
    {
        path: config.routes.teamTranslator, component: TeamTranslator, layout: DefaultProfile
    },
    {
        path: config.routes.testApi, component: TestApi, layout: null
    },
]

export { publicRoutes }