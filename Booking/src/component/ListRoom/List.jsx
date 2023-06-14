import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Tab,Tab2 } from './styled';
const List = () => {
    

    const [openModalIndex, setOpenModalIndex] = useState(null);
    const [Listrooms,setListrooms] = useState([]);


    const getList = () =>{
        Axios.get('http://localhost:3000/listroom')
        .then ((response) => {
            setListrooms(response.data)
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
        getList();
      }, []);
      
  return (
    
                                
        <>
           
        <Tab>
        <table>
        <tr style={{ textAlign: 'center' }}>
            <h3>รายละเอียด</h3>
          </tr>
          {Listrooms.map((val, index) => (
            <tr key={index}>
              <td className="topic">
                <h4
                  style={{
                    backgroundColor: val.color,
                    width: '30%',
                    borderRadius: '5px',
                    textAlign: 'center',
                    color: '#FFFF',
                  }}
                >
                  {val.name}
                </h4>
                <p>{val.detail}</p>
              </td>
              <td style={{ textAlign: 'right' }}>
                
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
                            <h4>ชื่อห้อง</h4>
                          </td>
                          <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                            <p
                              style={{
                                backgroundColor: val.color,
                                width: '60%',
                                borderRadius: '5px',
                                textAlign: 'center',
                                color: '#FFFF',
                              }}
                            >
                              {val.name}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                            <h4>รายละเอียด</h4>
                          </td>
                          <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                            <p>{val.detail}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                            <h4>อาคาร/สถานที่</h4>
                          </td>
                          <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                            <p>{val.build}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                            <h4>จำนวนที่นั่ง</h4>
                          </td>
                          <td style={{ width: '800PX', borderLeft: '1px solid #000000', paddingLeft: '7px' }}>
                            <p>{val.seat} ที่นั่ง</p>
                          </td>
                        </tr>
                      </table>
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

export default List


