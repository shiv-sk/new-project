import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import ContineousPage from './pages/ContineousPage.jsx'
import Organization from './pages/Organizatiom.jsx'
import PostingJob from './pages/PostingJob.jsx'
import Profile from './pages/Profile.jsx'
import JobDetail from './pages/JobDetail.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"contineous",
        element:<ContineousPage/>
      },
      {
        path:"organization",
        element:<Organization/>
      },
      {
        path:"postJob",
        element:<PostingJob/>
      },
      {
        path:"profile",
        element:<Profile/>
      },
      {
        path:"JobDetail",
        element:<JobDetail/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
