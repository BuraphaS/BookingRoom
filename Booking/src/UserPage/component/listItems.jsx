import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';




const handleLogout = () => {
  localStorage.removeItem('token');


  alert('Logging out');
  
  window.location.reload();
};

export const mainListItems = (


  
  <React.Fragment>
    <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/listUser">

    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="หน้าหลัก" />
    </ListItemButton>
    </Link>
    <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/listroomsUser">

    <ListItemButton>
      <ListItemIcon>
        <MenuBookTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="รายละเอียดห้องประชุม" />
    </ListItemButton>

    </Link>
    <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/bookingUser">
    <ListItemButton>
      <ListItemIcon>
        <InventoryTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="จองห้องประชุม" />
    </ListItemButton>
    </Link>

    <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/bookinglist">
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="ห้องที่จอง" />
    </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  
  <React.Fragment>
    <ListSubheader component="div" inset>
     
    </ListSubheader>

<Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/infoUser">
    <ListItemButton>
      <ListItemIcon>
        <AccountBoxTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="ข้อมูลส่วนตัว" />
    </ListItemButton>
</Link>

    <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/login">
      <ListItemButton onClick={handleLogout}>
      <ListItemIcon>
        <LogoutTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="ออกจากระบบ" />
    </ListItemButton>
    </Link>

  </React.Fragment>
);