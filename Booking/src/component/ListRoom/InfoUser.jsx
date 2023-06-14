import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';

import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';



const Info = () => {

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

    const getUsers = () =>{
      Axios.get('http://localhost:3000/users')
      .then ((response) => {
          setListrooms(response.data)
      })
  }

   
    
    useEffect(() => {
        fetchUserData();
        getUsers();
      }, []);


      
  return (
    
                                
        <>
        <div style={{backgroundColor:'#ffffff',borderRadius:'5px' ,color:'#000000',padding:'2%'}}>

            <div style={{textAlign:'center',marginBottom:'3%',padding:'0.5rem'}}>
                <h2 >ข้อมูลส่วนตัว</h2>
                <hr style={{border:'2px solid #253976',marginTop:'0.5rem',borderRadius:'25px'}}/>
            </div>
            {userData ? ( 
              <>
             <div style={{display:'flex',justifyContent:'space-around'}}>
        <div style={{width:'50%'}}>
                <div style={{justifyContent:'space-between',alignItems:'center',display:'flex',width:'100%',height:'50px'}}>
                    <div style={{display:'flex',width:'100%'}}>
                        <h4 style={{width:'100%',display:'flex',justifyContent:'right',alignItems:'center',marginRight:'10%'}}><EmailTwoToneIcon /> E-mail :</h4>
                        
                        
                    </div> 
                    <div style={{display:'flex',width:'100%'}}>
                        <input type='email' 
                        style={{height:'30px',width:'100%',borderRadius:'5px',padding:'2%',marginRight:'20%',textAlign:'center'}} 
                        value={userData.email}
                        disabled
                        />
                    </div>
                    

                    
                </div>
                <div style={{justifyContent:'space-between',alignItems:'center',display:'flex',width:'100%',height:'50px'}}>
                    <div style={{display:'flex',width:'100%'}}>
                    <h4 style={{width:'100%',display:'flex',justifyContent:'right',alignItems:'center',marginRight:'10%'}}><PersonOutlineTwoToneIcon />Username :</h4>
                    
                        
                    </div> 
                    <div style={{display:'flex',width:'100%'}}>
                    <input type='text' 
                    style={{height:'30px',width:'100%',borderRadius:'5px',padding:'2%',marginRight:'20%',textAlign:'center'}} 
                    value={userData.username}
                    disabled
                    />
                
                    </div>
                    

                    
                </div>

                <div style={{justifyContent:'space-between',alignItems:'center',display:'flex',width:'100%',height:'50px'}}>
                    <div style={{display:'flex',width:'100%'}}>
                    <h4 style={{width:'100%',display:'flex',justifyContent:'right',alignItems:'center',marginRight:'10%'}}><CallTwoToneIcon/> Tel :</h4>
                        
                        
                    </div> 
                    <div style={{display:'flex',width:'100%'}}>
                    <input type='text' 
                        style={{height:'30px',width:'100%' ,borderRadius:'5px',padding:'1.4%',marginRight:'20%',textAlign:'center'}} 
                        value={userData.tel}
                        disabled
                        /> 
                    </div>

                </div>

            </div>
            <div style={{display:'flex-block',width:'50%'}}>
                <div style={{justifyContent:'space-between',alignItems:'center',display:'flex',width:'100%',height:'50px'}}>
                    <div style={{display:'flex',width:'50%'}}>
                        <h4 style={{width:'100%',display:'flex',justifyContent:'left',alignItems:'center',marginRight:'10%'}}><AdminPanelSettingsTwoToneIcon />Role :</h4>
                        
                        
                    </div> 
                    <div style={{display:'flex',width:'100%'}}>
                        <input type='role' 
                        style={{height:'30px',width:'65%',borderRadius:'5px',padding:'2%',marginRight:'5%',textAlign:'center',backgroundColor:userData.color}} 
                        value={userData.role}
                        disabled
                        />
                    </div>
                    

                    
                </div>
                <div style={{justifyContent:'space-between',alignItems:'center',display:'flex',width:'100%',height:'50px'}}>
                    <div style={{display:'flex',width:'50%'}}>
                    <h4 style={{width:'100%',display:'flex',justifyContent:'left',alignItems:'center',marginRight:'10%'}}><BadgeTwoToneIcon /> Name :</h4>
                    
                        
                    </div> 
                    <div style={{display:'flex',width:'100%'}}>
                    <input type='text' 
                    style={{height:'30px',width:'65%',borderRadius:'5px',padding:'2%',marginRight:'5%',textAlign:'center'}} 
                    value={userData.fname}
                    disabled
                    />
                
                    </div>
                    

                    
                </div>

            </div>
</div>
              </>
           


            ):(
              <>
                <div style={{display:'flex',alignItems:'center',justifyContent:'left'}}>
                        <h4 style={{margin:'1%'}}>E-mail :</h4>
                        <input type='email' style={{height:'30px',width:'22%',marginLeft:'4%'}} disabled placeholder="55"/>            
                </div>

                <div style={{display:'flex',alignItems:'center',justifyContent:'left'}}>
                    <h4 style={{margin:'0.9%'}}>Username :</h4>
                    <input type='text' style={{height:'30px',width:'22%',borderRadius:'5px',padding:'0.4%'}} disabled/>
                    
                </div>

                <div style={{display:'flex',alignItems:'center',justifyContent:'left'}}>
                    <h4 style={{margin:'1%'}}>Name :</h4>
                    <input type='text' disabled style={{height:'30px',width:'22%',marginLeft:'3%' ,borderRadius:'5px',padding:'0.4%'}} />
                  
                </div>
              </>
                 
             
            )}
           
            
            
        </div>
        
        
        
        </>
        
    

  )
}

export default Info


