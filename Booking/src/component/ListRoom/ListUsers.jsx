import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Tab,Tab2 } from './styled';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const ListUser = () => {
    

    const [openModalIndex, setOpenModalIndex] = useState(null);
    const [Users,setUsers] = useState([]);
    const [role,setRole] = useState([]);
    const [Newrole,setNewRole] = useState('');

    const getRole = () =>{
        Axios.get('http://localhost:3000/role')
        .then ((response) => {
            setRole(response.data)
        })
    }

    const updateData = (id, newRole) => {
      Axios.put(`http://localhost:3000/updaterole/${id}`, { role: newRole })
        .then(response => {   
          console.log(response.data);           
          handleCloseModal();
        })
        .catch(error => {   
          console.error(error);
        });
    };

    const getUsers = () =>{
        Axios.get('http://localhost:3000/users')
        .then ((response) => {
            setUsers(response.data)
        })
    }
   
  //Modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 650,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        
        p: 4,
      };

      const handleOpenModal = (index) => {
        setOpenModalIndex(index);
      };
    
      const handleCloseModal = () => {
        setOpenModalIndex(null);
      };
    
    useEffect(() => {
        getUsers();
        getRole()
      }, []);
      
  return (
    
                                
        <>
           
        <Tab>
        <table>
            <tr style={{ textAlign: 'center' }}>
                <td>
                    <h3>E-mail</h3>
                </td>
                <td>
                    <h3>UserName</h3>
                </td>
                <td>
                    <h3>Name</h3>
                </td>
                <td>
                    <h3>Role</h3>
                </td>
                <td>
                
                </td>
                
            </tr>
          {Users.map((val, index) => (
            <tr key={index}>
              <td className="email">
                <h4
                  style={{
                    
                   
                    borderRadius: '5px',
                    textAlign: 'center',
                    color: '#101010',
                  }}
                >
                  {val.email}
                </h4>
                
              </td>
              <td className="username">
                <h4
                  style={{
                   
                    
                    borderRadius: '5px',
                    textAlign: 'center',
                    color: '#101010',
                  }}
                >
                  {val.username}
                </h4>
                
              </td>
              <td className="name">
                <h4
                  style={{
                  
                    
                    borderRadius: '5px',
                    textAlign: 'center',
                    color: '#101010',
                  }}
                >
                  {val.fname}
                </h4>
                
              </td>
              <td className="role">
              <h4
                  style={{
                    width:"100%",
                    backgroundColor : val.color,
                    borderRadius: '5px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  {val.role}
                </h4>
              </td>
              <td className="tdr">
                <Button className="btn2" onClick={() => handleOpenModal(index)}>
                  รายละเอียด
                </Button>
              </td>
              <Modal
                open={openModalIndex === index}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    style={{ borderBottom: '1px solid #000000', height: 'auto' }}
                  >
                    <h3>ข้อมูล</h3>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                    <Tab2>
                      <table style={{ border: '1px solid #000000', borderCollapse: 'collapse', height: '200px' }}>
                        <tr>
                          <td style={{ width: '300PX', paddingLeft: '7px' }}>
                            <h4>Name</h4>
                          </td>
                          <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                            <h4
                              style={{
                                backgroundColor: '#004d99',
                                width: '60%',
                                borderRadius: '5px',
                                textAlign: 'center',
                                color: '#FFFF',
                              }}
                            >
                              {val.fname}
                            </h4>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                            <h4>E-mail</h4>
                          </td>
                          <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                            <h4>{val.email}</h4>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                            <h4>User Name</h4>
                          </td>
                          <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                            <h4>{val.username}</h4>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                            <h4>Role</h4>
                          </td>
                          <td style={{ width: '700PX', borderLeft: '1px solid #000000', paddingLeft: '7px',height:'25%' }}>
                            
                          
                          <Select
                                id="role"
                                defaultValue={val.role}
                                style={{
                                  width: "40%",
                                  backgroundColor: val.color,
                                  display:'flex',
                                  margin:'1rem',
                                  display: "inline-block",
                                  border: "1px solid #ccc",
                                  borderRadius: "4px",
                                  height: '55px',
                                  color: '#ffffff',
                                  
                                 
                                }}
                                onChange={(event)=>{
                                  setNewRole(event.target.value)
                                }}
                              >
                                {role.map((val, key) => {
                                  return (
                                    <MenuItem 
                                    
                                     key={key} value={val.role}>{val.role}</MenuItem>
                                  );
                                })}
                              </Select>
                         
                              

                         
                          </td>                
                        </tr>
                      </table>
                      <div style={{textAlign:'right',marginTop:'1.5rem'}}>
                        <button className='button1' style={{width:'15%',height:'35px'}} onClick={()=>updateData(val.id,Newrole)}>ยืนยัน</button>
                      </div>
                    </Tab2>
                  </Typography>
                </Box>
              </Modal>
            </tr>
          ))}
        </table>
       </Tab>  
        
        </>
        
    

  )
}

export default ListUser


