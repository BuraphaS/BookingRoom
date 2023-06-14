import React from 'react'
import {NavCon} from './styled'
import { HeaderCon } from './styled'
import { Menu } from './styled'

import Logo from '../../assets/LOGO-PAC-250x98.png'
import { Link, useMatch,useResolvedPath } from 'react-router-dom'



export default function Header() {
  return (
    <>
    <HeaderCon>
  
        <NavCon>
          <div>
            <img style={{width:"200px",margin:"5px 5px"}} src={Logo} alt="" />
          </div>
            <Menu>
                           
                <CustomLink to="/">หน้าหลัก</CustomLink>
                <CustomLink to="/">รายการห้องประชุม</CustomLink>
                <CustomLink to="/login">เข้าสู่ระบบ</CustomLink>
                
            </Menu>
        </NavCon>

       
    </HeaderCon>

     
    </>
  )
}

function CustomLink({ to,children,...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path:resolvedPath.pathname,end:true})
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}