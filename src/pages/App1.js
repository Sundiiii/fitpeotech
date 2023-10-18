import { useState } from 'react'
import './common.css';
import Header1 from './Header1';
import Sidebar1 from './sidebar1';
import Home1 from './Home1';

function App1() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header1 OpenSidebar={OpenSidebar}/>
    <Sidebar1 openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 
      <Home1 />
    </div>
  )
}

export default App1