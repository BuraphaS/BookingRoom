import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Tab,Tab2,Button1 } from '../../component/ListRoom/styled';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { id } from 'date-fns/locale';
const List = () => {
    
   
  
    const [openModalIndex, setOpenModalIndex] = useState(null);
    const [Booking,setBooking] = useState([]);
    const [status,setStatus] = useState([])
    const [Newstatus_id,setstatus_id] = useState([]);
    
    const [userData, setUserData] = useState(null);
    const token = localStorage.getItem('token');

    const fetchUserData = async () => {
      try {
        const response = await Axios.get('http://localhost:3000/userlog', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
  
    const getBooking = () => {
      Axios.get('http://localhost:3000/calendar')
        .then((response) => {
          setBooking(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
   

    
  const getStatus = () =>{
      Axios.get('http://localhost:3000/status')
      .then ((response) => {
          setStatus(response.data)
      })
  }

  const updateData = (id, Newstatus_id) => {
    Axios.put(`http://localhost:3000/update/${id}`, { status_id: Newstatus_id })
      .then(response => {   
        console.log(response.data);           
        handleCloseModal();
      })
      .catch(error => {   
        console.error(error);
      });
  };

  const deleteData = (id) => {
    Axios.delete(`http://localhost:3000/delete/${id}`)
      
         alert('Delete Success')
         window.location.reload()
       
      .catch((error) => {
        console.error(error);
      });
  };
  //Modal
    

      const handleOpenModal = (index) => {
        setOpenModalIndex(index);
      };
    
      const handleCloseModal = () => {
        setOpenModalIndex(null);
      };
    
    useEffect(() => {
        getBooking();
        getStatus();
        fetchUserData();

      }, []);
      
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
      const formatDate = (dateString) => {
        const months = [
          'มกราคม',
          'กุมภาพันธ์',
          'มีนาคม',
          'เมษายน',
          'พฤษภาคม',
          'มิถุนายน',
          'กรกฎาคม',
          'สิงหาคม',
          'กันยายน',
          'ตุลาคม',
          'พฤศจิกายน',
          'ธันวาคม',
        ];
    
        const date = new Date(dateString);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
      };
      
      
  return (
    
                                
        <>
           
        <Tab>
        <table>
        <tr>
          <td>
            <h3 style={{marginLeft:'5rem'}}>รายละเอียด</h3>
          </td>
          <td>
            <h3 style={{width:'50%',textAlign:'center'}}>สถานะ</h3>
          </td>
          
            
        </tr>
        
          {Booking.map((val, index) => (
            (userData && userData.fname === val.fname) &&(

           
            <tr key={index}>
              <td className="topic">
                <h4
                  style={{
                    backgroundColor: val.color,
                    width: '40%',
                    borderRadius: '5px',
                    textAlign: 'center',
                    color: '#FFFF',
                  }}
                >
                  {val.name}
                </h4>
                <p>{val.detail}</p>
              </td>
                  <td>
                    <h4 style={{backgroundColor:val.color_status,width:'50%',borderRadius:'5px',textAlign:'center',color:'#FFFFFF'}}>{val.status}</h4>
                  </td>
              <td style={{ textAlign: 'right' }}>
                <Button className="btn1" onClick={() => handleOpenModal(index)}>
                  แก้ไข
                </Button>
              </td>
              <td className="tdr">
                <Button className="btn2" variant="contained" onClick={() => deleteData(val.id)}>
                  ลบ
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
                      <table style={{ border: '1px solid #000000', borderCollapse: 'collapse', height: '500px' }}>
                        
                        <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>หัวข้อ</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>{val.topic}</h4>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>วันที่สร้าง</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>{formatDate(val.create_date)}</h4>
              </td>
            </tr>
          <tr>
              <td style={{ width: '300PX', paddingLeft: '7px' }}>
                <h4>ชื่อห้อง</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4
                  style={{
                    backgroundColor:val.color,
                    width: '60%',
                    borderRadius: '5px',
                    textAlign: 'center',
                    color: '#FFFF',
                  }}
                >
                  {val.name}
                </h4>
              </td>
            </tr>
            
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>อาคาร/สถานที่</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>{val.build}</h4>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>จำนวนที่นั่ง</h4>
              </td>
              <td style={{ width: '800PX', borderLeft: '1px solid #000000', paddingLeft: '7px' }}>
                <h5>{val.seat} ที่นั่ง</h5>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>จำนวนผู้เข้าประชุม</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>{val.attend}</h4>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>ชื่อผู้จอง</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>{val.fname}</h4>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>โทรศัพท์</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>{val.tel}</h4>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>วันที่</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>{formatDate(val.begin)} ถึง {formatDate(val.end)}</h4>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>ใช้สำหรับ</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>{val.usefor}</h4>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>แผนกที่ขอใช้</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>{val.department_th}</h4>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>อุปกรณ์</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>{val.item}</h4>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>สถานะ</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
              <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                  <Select
              
                    id='status'
                     
                    onChange={(event)=>{
                      setstatus_id(event.target.value)
                    }}
                   
                  >
                    <MenuItem value={2}>ยกเลิก</MenuItem>
                    
                    
                  </Select>
          
                    
                  </FormControl>
                </Box>
                <h4 style={{backgroundColor:val.color_status,width:'20%',textAlign:'center',borderRadius:'5px',color:'#FFFFFF'}}>{val.status}</h4>
              </td>
            </tr>
                      </table>
                      <div style={{width:'100%',display:'flex',justifyContent:'right',padding:'1rem'}}>
                        <Button1>
                          <button className='button1' onClick={()=>updateData(val.id,Newstatus_id)}>ยืนยัน</button>
                        </Button1>
                        
                      </div>
                    </Tab2>
                  </Typography>
                </Box>
              </Modal>
            </tr>
            )
          ))}
        </table>
       </Tab>  
        
        </>
        
    

  )
}

export default List


