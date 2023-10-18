import React from 'react'
import  { BsSearch} from 'react-icons/bs'
import "./common.css"
function Header1({OpenSidebar}) {
  return (
    <header className='header'>
        {/* <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div> */}
        <div className='header-left'>
           Hellow Shahrukh 👋, 
        </div>
        <div className='header-right'>
            <BsSearch  className='icon'/>
        </div>
      
    </header>
  )
}

export default Header1