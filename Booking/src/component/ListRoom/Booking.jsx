import React, { useState,useEffect } from 'react'
import { Table } from './styled'
import Axios from 'axios'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from 'react-datepicker'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import OutlinedInput from '@mui/material/OutlinedInput';

import ReactDom from 'react-dom';

dayjs.extend(utc)
dayjs.extend(timezone)

const Booking = () => {

  const [Listrooms,setListrooms] = useState([]);
  const getList = () =>{
      Axios.get('http://localhost:3000/listroom')
      .then ((response) => {
          setListrooms(response.data)
      })
  }
  const [Department,setDepartment] = useState([]);
  const getDepartment = () =>{
      Axios.get('http://localhost:3000/department')
      .then ((response) => {
          setDepartment(response.data)
      })
  }
 

  const [Usefor,setUsefor] = useState([]);
  const getUsefor = () =>{
      Axios.get('http://localhost:3000/usefor')
      .then ((response) => {
          setUsefor(response.data)
      })
  }
  const [Item,setItemP] = useState([]);
  const getItem1 = () =>{
      Axios.get('http://localhost:3000/item')
      .then ((response) => {
          setItemP(response.data)
      })
  }

 

  const [room_id,setRoomID] = useState(0)
  const [topic,setTopic] = useState("")
  const [comment,setComment] = useState("")
  const [attend,setAttend] = useState(0)
  const [member_id,setMemberID] = useState(0)
  const [department_id,setDepartmentID] = useState(0)
  const [tel,setTel] = useState(0)
  const [usefor_id,setUseforID] = useState(0)
  const [item,setItem] = useState('')
  const [fname,setfname] = useState('')
  const [selectedItems, setSelectedItems] = useState([]);

  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
    setItem(value);
  };

 

  const addList = ()=>{
    if(!room_id || !topic || !attend || !fname || !tel || !usefor_id || !department_id || !startDate || !endDate || !startTime || !endEnd) {
      window.alert('โปรดใส่ข้อมูลให้ครบถ้วน');
      return;
    }else if(endDate < startDate){
      window.alert('ใส่วันที่ให้ถูกต้อง');
      return;
    }else if(endEnd < startTime){
      window.alert('ใส่เวลาให้ถูกต้อง');
      return;
    }
    
    Axios.post('http://localhost:3000/booking',{

      room_id: room_id,
      topic:topic,
      comment:comment,
      attend:attend,
      begin:startDate,
      end:endDate,
      tel:tel,
      usefor_id:usefor_id,
      item:item.join(','),
      department_id:department_id,
      member_id:member_id,
      time_begin:startTime,
      time_end:endEnd,
      fname:fname

      


    }).then(()=>{
      setBookingRoom([
        ...BookingRoom,
        {
           
          room_id: room_id,
          topic:topic,
          comment:comment,
          attend:attend,
          begin:begin,
          end:end,
          tel:tel,
          usefor_id:usefor_id,
          item:item.join(','),
          department_id:department_id,
          member_id:member_id,
          time_begin:startTime,
          time_end:endEnd,
          fname:fname

        }
      ])
         
    })
        
  }
  useEffect(() => {
    getList();
    getDepartment();
    getUsefor()
    getItem1()
    fetchUserData();
      
      }, []);

      

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
  


  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setTimeStart] = useState(new Date());
  const [endEnd, setTimeEnd] = useState(new Date());
  
  useEffect(() => {
    if (userData) {
      setfname(userData.fname);
      setTel(userData.tel);
    }
  }, [userData]);



  return (
<div>

<Table>
      

     
        <form>
        <label htmlFor="room">ชื่อห้อง</label>
        
        
            <Select
              
              id='room'
              
              onChange={(event)=>{
                setRoomID(event.target.value)
              }}
              style={{width:"100%",backgroundColor:"#FFFFFF",padding:"0px",margin:"15px",display:"inline-block",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"}}
            >{Listrooms.map((val,key)=>{
                        return(
              <MenuItem key={key} defaultValue={val.id}  value={val.id} >{val.name}</MenuItem>
              )})}
              
            </Select>
          
            <label htmlFor="topic">หัวข้อ</label>
            <input type="text" id="topic" placeholder="หัวข้อ" onChange={(event)=>{
              setTopic(event.target.value)
            }} />
            
            <label htmlFor="attend">จำนวนผู้เข้าประชุม</label>
            <input type="text" id="attend" placeholder="จำนวน" onChange={(event)=>{
              setAttend(event.target.value)
            }} />
            
            
            <label htmlFor="name">ชื่อผู้จอง</label>
              {userData ? (
                <input
                type="text"
                disabled
                id="name"
                value={userData.fname}
                onChange={(event) => {
                  setfname(event.target.value);
                }}
              />
              ) : (
                <input type="text" disabled id="name" value="user not found" 
                 />
              )}

            <label htmlFor="tel">โทรศัพท์</label>

            {userData ? (
              <input type="text" disabled id="tel" placeholder="Tel." value={userData.tel} onChange={(event)=>{
              setTel(event.target.value)
            }}/>
            ):(
                <input type="text" disabled id="tel" value="Tel not found" 
                 />
            )}
            


            <label htmlFor="usefor">ใช้สำหรับ</label>
            <Select 

              id='usefor'
             
              
              onChange={(event)=>{
                setUseforID(event.target.value)
              }}
              style={{width:"100%",backgroundColor:"#FFFFFF",padding:"0px",margin:"15px",display:"inline-block",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"}}
            >{Usefor.map((val,key)=>{
                        return(
              <MenuItem key={key} value={val.id}>{val.usefor}</MenuItem>
              )})}
              
            </Select>
            <label htmlFor="department">แผนกที่ขอใช้</label>
            <Select 

              id='department'
              
              onChange={(event)=>{
                setDepartmentID(event.target.value)
              }}
              style={{width:"100%",backgroundColor:"#FFFFFF",padding:"0px",margin:"15px",display:"inline-block",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"}}
            >{Department.map((val,key)=>{
                        return(
              <MenuItem key={key} value={val.id}>{val.department_th}</MenuItem>
              )})}
              
            </Select>
            
            <div style={{width:"59%",justifyContent:"space-between",display:"flex"}}>
              <label htmlFor="begin">วันที่เริ่มต้น</label>
              <label htmlFor="timebegin">เวลาเริ่มต้น</label>
            </div>
            <div style={{display:"flex"}}>
              <div style={{width:"49%"}}>
                <DatePicker id='begin'
                 selected={startDate} 
                 dateFormat={"dd/MM/yyyy"}
                 onChange={(date) => setStartDate(date)} />
              </div > 
              <div style={{width:"20%",display:"flex", color:"#FFFFFF",backgroundColor:"#FFFFFF",height:"20%",marginLeft:"1.5rem"}}>
                      <LocalizationProvider dateAdapter={AdapterDayjs} >                    
                          
                          <MobileTimePicker defaultValue={dayjs(startTime).tz("Asia/Bangkok")}
                              onChange={(time) => {setTimeStart(time);}}/>           
                      </LocalizationProvider>       
              </div>
            </div>
            
                         
            
            <div style={{width:"59%",justifyContent:"space-between",display:"flex"}}>
              <label htmlFor="end">วันที่สิ้นสุด</label>
              <label htmlFor="timeend">เวลาสิ้นสุด</label>
            </div>
            <div style={{display:"flex"}}>
              <div style={{width:"49%"}}>
                <DatePicker id='end' 
                selected={endDate} 
                dateFormat={"dd/MM/yyyy"}
                onChange={(date) => setEndDate(date)} />
              </div > 
              <div style={{width:"20%",display:"flex", color:"#FFFFFF",backgroundColor:"#FFFFFF",height:"20%",marginLeft:"1.5rem"}} >
                <LocalizationProvider dateAdapter={AdapterDayjs} >                                              
                <MobileTimePicker defaultValue={dayjs(endDate).tz("Asia/Bangkok")} onChange={(time) => {setTimeEnd(time);}}/>
                </LocalizationProvider>       
              </div>
            </div>
            <label htmlFor="item">อุปกรณ์ (*เลือกได้มากกว่า 1)</label>


<div>
      <FormControl style={{backgroundColor:'#FFFFFF'}} sx={{ m: 1, width: "100%" }}>
     
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="อุปการณ์" />}
        >
          {Item.map((val,key) => (
            <MenuItem
              key={key}
              value={val.item}
             
            >
              {val.item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
              
            
            <label htmlFor="comment">อื่นๆ</label>
            <input type="text" id="comment" placeholder="*comment" onChange={(event)=>{
              setComment(event.target.value)
            }}/>                                   
            <input type="submit" 
           // disabled={!room_id || !topic || !attend || !fname || !tel || !usefor_id || !department_id || !startDate || !endDate || !startTime || !endEnd}
            onClick={addList}
              />
                
        </form>
      
    </Table>
</div>


    
    
  )
}

export default Booking
