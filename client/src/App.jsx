import { Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
library.add(fab, fas, far)
