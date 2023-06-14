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

import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import NotStartedTwoToneIcon from '@mui/icons-material/NotStartedTwoTone';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';

import List from '@mui/material/List';

import { Link } from 'react-router-dom';



const handleLogout = () => {

  localStorage.removeItem('token');

  alert('Logging out');
  
  window.location.reload();
};

export const mainListItems = (
  
 


  
  <React.Fragment>
    <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/list">

    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="หน้าหลัก" />
    </ListItemButton>
    </Link>
    <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/listrooms">

    <ListItemButton>
      <ListItemIcon>
        <MenuBookTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="รายละเอียดห้องประชุม" />
    </ListItemButton>

    </Link>
    <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/booking">
    <ListItemButton>
      <ListItemIcon>
        <InventoryTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="จองห้องประชุม" />
    </ListItemButton>
    </Link>
    <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/users">
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="สมาชิก" />
    </ListItemButton>
    </Link>
    <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/report">
    <ListItemButton>
      <ListItemIcon>
        <ReportTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="รายงาน" />
    </ListItemButton>
    </Link>
  </React.Fragment>
);



export const secondaryListItems = (
  
  
  <React.Fragment>
    <ListSubheader component="div" inset>
     
    </ListSubheader>
   
    
      <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="เพิ่ม/ลบ" />
      
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
    <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/createroom">
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <HomeWorkTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="เพิ่ม/ลบ ห้อง" />
          </ListItemButton>
        </List>
      </Link>
      <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/createdepartment">
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="เพิ่ม/ลบ แผนก" />
          </ListItemButton>
        </List>
        </Link>
        <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/createitem">
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CategoryTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="เพิ่ม/ลบ อุปกรณ์" />
            </ListItemButton>
            </List>
        </Link>
        <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/createusefor">
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <NotStartedTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="เพิ่ม/ลบ ใช้สำหรับ" />
            </ListItemButton>
            </List>
        </Link>
        
      </Collapse>
  <Link id="RouterNavLink" style={{textDecoration:"none",color:'#000000'}} to="/info">
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