import React from 'react'
import { Avatar } from "@mui/material";
import "./sidebar.css"
import MultipleSelect from '../selector/selector';
export default function Sidebar() {
  return (
    <div>
        <nav>
            Dashboard
        </nav>
        <div className="sidebarMenuContainer">
            <div className="">product </div>
            <div className="">customer</div>
            <div className="">income</div>
            <div className=""></div>
            <div className="">promot </div>
            <div className="">help</div>
        </div>
        <div className="manager">
           {/* <Avatar alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrFreR1vBsHpmIybfANeQEc7yaNemXqnM7JNcuDjN&s" /> */}
           <MultipleSelect/>
        </div>
      
    </div>
  )
}

