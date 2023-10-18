import React from "react";
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
function Navbar({sidebarOpen,openSidebar}){

    return(
        <nav className="navbar">           
            <div className="navbar__left">
            Hellow Shahrukh 👋,               
            </div>
            <div className="navbar__right">
              <SearchIcon/>                    
               </div>   
          </nav>
    )
}
export default Navbar;