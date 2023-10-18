import React from 'react'
import LightbulbCircleOutlinedIcon from '@mui/icons-material/LightbulbCircleOutlined';
import TokenIcon from '@mui/icons-material/Token';
import { TbHexagonLetterO } from "react-icons/tb";
import { AiOutlineCodepen } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiWallet} from "react-icons/gi";
import { LuBadgePercent} from "react-icons/lu";
import { TbMessageQuestion} from "react-icons/tb";
import { MdKeyboardArrowRight} from "react-icons/md";
import { Avatar } from "@mui/material";


import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import "./common.css"
function Sidebar1({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <TbHexagonLetterO/> Dashboard               
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                <LightbulbCircleOutlinedIcon/>Dashboard
                    {/* <BsGrid1X2Fill className='icon'/> Dashboard */}
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                   <AiOutlineCodepen className='icon' name='Evano'/> Products<MdKeyboardArrowRight className='icon'/>
                </a>
            </li>
           
            <li className='sidebar-list-item'>
                <a href="">
                  <CgProfile className='icon'/> Customers<MdKeyboardArrowRight className='icon'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <GiWallet className='icon'/>Income<MdKeyboardArrowRight className='icon'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <LuBadgePercent className='icon'/> Promote<MdKeyboardArrowRight className='icon'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <TbMessageQuestion className='icon'/> Help<MdKeyboardArrowRight className='icon'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
         <Avatar alt="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWT5Mf_cn49AON_tSw83wJhy-CS3Lhw5OW5Q&usqp=CAU' />

                Evano Project Manager
                </a>
            </li>
        </ul>
    </aside>
  )
}
export default Sidebar1;