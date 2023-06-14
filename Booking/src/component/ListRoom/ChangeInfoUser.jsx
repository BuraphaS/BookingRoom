import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import HttpsTwoToneIcon from '@mui/icons-material/HttpsTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';

import { Bbtn } from './styled';

const Info = () => {


    const [Newemail,setNewEmail] = useState([]);
    const [Newusername,setNewUsername] = useState([]);
    const [Newfname,setNewfname] = useState([]);
    const [Newtel,setNewtel] = useState([]);
    const [NewPassword,setNewPassword] = useState([]);

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

    const updateData = (id, NewEmail,NewUsername,Newfname ,Newtel ,Newpassword) => {

        Axios.put(`http://localhost:3000/updateInfo/${id}`, { email: NewEmail ,username: NewUsername, fname: Newfname , tel:Newtel , password:Newpassword })
          .then(response => {   
            console.log(response.data);      
            alert('แก้ไขข้อมูลสำเร็จ')     
          })
          .catch(error => {   
            console.error(error);
          });
      };

   
    
    useEffect(() => {
        fetchUserData();
       
      }, []);


      
  return (
    
                                
        <>
        <div style={{backgroundColor:'#ffffff',borderRadius:'5px' ,color:'#000000',width:'100%',padding:'2%'}}>

            <div style={{textAlign:'center',marginBottom:'3%',padding:'0.5rem'}}>
                <h2 >แก้ไข</h2>
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
                        style={{height:'30px',width:'100%',borderRadius:'5px',padding:'2%',marginRight:'20%'}} 
                        
                        onChange={(event)=>{
                            setNewEmail(event.target.value)
                          }}
                        />
                    </div>
                    

                    
                </div>
                <div style={{justifyContent:'space-between',alignItems:'center',display:'flex',width:'100%',height:'50px'}}>
                    <div style={{display:'flex',width:'100%'}}>
                    <h4 style={{width:'100%',display:'flex',justifyContent:'right',alignItems:'center',marginRight:'10%'}}><PersonOutlineTwoToneIcon />Username :</h4>
                    
                        
                    </div> 
                    <div style={{display:'flex',width:'100%'}}>
                    <input type='text' 
                    style={{height:'30px',width:'100%',borderRadius:'5px',padding:'2%',marginRight:'20%'}} 
                    
                    onChange={(event)=>{
                        setNewUsername(event.target.value)
                      }}
                    />
                
                    </div>
                    

                    
                </div>

                <div style={{justifyContent:'space-between',alignItems:'center',display:'flex',width:'100%',height:'50px'}}>
                    <div style={{display:'flex',width:'100%'}}>
                    <h4 style={{width:'100%',display:'flex',justifyContent:'right',alignItems:'center',marginRight:'10%'}}><HttpsTwoToneIcon/> Password :</h4>
                        
                        
                    </div> 
                    <div style={{display:'flex',width:'100%'}}>
                    <input type='password' 
                        style={{height:'30px',width:'100%' ,borderRadius:'5px',padding:'1.4%',marginRight:'20%'}} 
                        onChange={(event) => setConfirmPassword(event.target.value)}
                          
                        /> 
                    </div>

                </div>

            </div>
            <div style={{display:'flex-block',width:'50%'}}>
                <div style={{justifyContent:'space-between',alignItems:'center',display:'flex',width:'100%',height:'50px'}}>
                    <div style={{display:'flex',width:'50%'}}>
                        <h4 style={{width:'100%',display:'flex',justifyContent:'left',alignItems:'center',marginRight:'10%'}}><CallTwoToneIcon />Tel :</h4>
                        
                        
                    </div> 
                    <div style={{display:'flex',width:'100%'}}>
                        <input type='text' 
                        style={{height:'30px',width:'65%',borderRadius:'5px',padding:'2%',marginRight:'5%'}} 
                        onChange={(event)=>{
                            setNewtel(event.target.value)
                          }}
                        />
                    </div>
                    

                    
                </div>
                <div style={{justifyContent:'space-between',alignItems:'center',display:'flex',width:'100%',height:'50px'}}>
                    <div style={{display:'flex',width:'50%'}}>
                    <h4 style={{width:'100%',display:'flex',justifyContent:'left',alignItems:'center',marginRight:'10%'}}><BadgeTwoToneIcon /> Name :</h4>
                    
                        
                    </div> 
                    <div style={{display:'flex',width:'100%'}}>
                    <input type='text' 
                    style={{height:'30px',width:'65%',borderRadius:'5px',padding:'2%',marginRight:'5%'}} 
                    
                    onChange={(event)=>{
                        setNewfname(event.target.value)
                      }}
                      />
                
                    </div>
                    

                    
                </div>

                <div style={{justifyContent:'space-between',alignItems:'center',display:'flex',width:'100%',height:'50px'}}>
                    <div style={{display:'flex',width:'50%'}}>
                    <h4 style={{width:'100%',display:'flex',justifyContent:'left',alignItems:'center',marginRight:'10%'}}><HttpsTwoToneIcon/> ยืนยัน Password :</h4>
                        
                        
                    </div> 
                    <div style={{display:'flex',width:'100%'}}>
                    <input type='password' 
                        style={{height:'30px',width:'65%' ,borderRadius:'5px',padding:'1.4%',marginRight:'5%'}} 
                        onChange={(event)=>{
                            setNewPassword(event.target.value);
                          
                          }}
                        /> 
                    </div>
                    

                </div>

            </div>
</div>     
                  <Bbtn>
                    <button class="button-73" role="button" onClick={() => updateData(userData.id, Newemail, Newusername, Newfname, Newtel, NewPassword)}>ยืนยัน</button>        
                </Bbtn>
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


