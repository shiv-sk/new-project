import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import ContineousPage from './pages/ContineousPage.jsx'
import Organization from './pages/Organization.jsx'
import PostingJob from './pages/PostingJob.jsx'
import Profile from './pages/Profile.jsx'
import JobDetail from './pages/JobDetail.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import { OrgProvider } from './context/OrganizationContext.jsx'
import { ProfileProvider } from './context/ProfileContext.jsx'
import Savejob from './pages/Savejob.jsx'
import Applications from './pages/Applications.jsx'
import { JobProvider } from './context/JobsContext.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
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
        path:"organization/:user",
        element:<Organization/>
      },
      {
        path:"organization",
        element:<Organization/>
      },
      {
        path:"postJob/:organization",
        element:<PostingJob/>
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
        path:"profile/:user",
        element:<Profile/>
      },
      {
        path:"JobDetail/:jobId",
        element:<JobDetail/>
      },
      {
        path:"savedjobs",
        element:<Savejob/>
      },
      {
        path:"application",
        element:<Applications/>
      }
    ]
  },
  {
    path:"/admin",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"",
        element:<AdminDashboard/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <OrgProvider>
        <JobProvider>
        <ProfileProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      </ProfileProvider>
      </JobProvider>
      </OrgProvider>
    </AuthProvider>
  </StrictMode>,
)
