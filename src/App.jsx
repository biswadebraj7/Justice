
import { Outlet } from 'react-router-dom'
import Navbar from './Component/Share/Navbar'
import Footer from './Page/Footer'
import Home from './Page/Home'

function App() {





  return (
    <>
    <Navbar />

    <div>
      <Outlet />
      
    </div>
    <Footer />
    </>
  )
}

export default App
