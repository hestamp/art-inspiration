import Login from '../pages/Login'
import About from '../pages/About'
import NoPage from '../pages/NoPage'
import PinIdPage from '../pages/PinIdPage'
import Main from '../pages/Main'
import Account from '../pages/Account'
import SignUp from '../pages/SignUp'

export const privateRoutes = [
  { path: '/about', element: About },
  { path: '/pin', element: Main },
  { path: '/pin/:id', element: PinIdPage },
  { path: '/', element: Main },
  { path: '/login', element: Main },
  { path: '/signup', element: Main },
  { path: '/account', element: Account },
  { path: '*', element: NoPage },
]

export const publicRoutes = [
  { path: '/login', element: Login },
  { path: '/about', element: About },
  { path: '*', element: NoPage },
  { path: '/signup', element: SignUp },
  { path: '/', element: Main },
]
