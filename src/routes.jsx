import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'

const router = createBrowserRouter([
  {
    path: '/Portfolio/',
    element: <Home />,
  },
  {
    path: '/Portfolio/cv',
    element: <Portfolio />,
  },
])

const MyRoutes = () => {
  return <RouterProvider router={router} />
}

export default MyRoutes
