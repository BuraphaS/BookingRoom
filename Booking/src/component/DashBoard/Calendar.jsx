import * as React from 'react';
import Link from '@mui/material/Link';
import {Calendar,dateFnsLocalizer} from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DatePicker from 'react-datepicker'
import Title from './Title.jsx';
import enUS from 'date-fns/locale/en-US'
import { useState,useEffect } from 'react';
import Axios from 'axios'

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'react-datepicker/dist/react-datepicker.css'

import moment from 'moment';
import { momentLocalizer } from 'react-big-calendar';
import { addDays } from 'date-fns';

import ListItemIcon from '@mui/material/ListItemIcon';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';

import { Closebtn } from '../ListRoom/styled.jsx';

//calendar



  
export default function Orders() {


  const locales = {
    'en-US': enUS,
  }
  const localizer = momentLocalizer(moment);

  //const localizer = dateFnsLocalizer({
  //  format,
  //  parse,
 //   startOfWeek,
 //   getDay,
 //   locales,
 // })

 // 

  
  
 const fetchData = async () => {
  try {
    const response = await Axios.get('http://localhost:3000/calendar');
    
    const data = response.data;

    const parsedEvents = data
    .filter((item) => item.status_id === 0)
    .map((item) => {
      const start = moment(item.begin).toDate();
      const end = moment(item.end).add(1, 'day').toDate();
      const timeBegin = moment(item.time_begin, 'HH:mm').add(7, 'hours').format('h:mm A');
      const timeEnd = moment(item.time_end, 'HH:mm').add(7, 'hours').format('h:mm A');

      return {
        id: item.id,
        title: `${timeBegin} - ${item.topic}`,
        time_begin: `${timeBegin}`,
        time_end: `${timeEnd}`,
        allday:true,
        start,
        end,
        color: item.color,
        create_date: item.create_date,
        name: item.name,
        build: item.build,
        seat:item.seat,
        attend:item.attend,
        tel:item.tel,
        department_th:item.department_th,
        item:item.item,
        status: item.status,
        topic: item.topic,
        usefor: item.usefor,
        begin: item.begin,
        end: item.end,
        fname:item.fname,
        color_stauts:item.color_status,
        comment:item.comment

        

      };
    });
    const modifiedEvents = parsedEvents.map((event) => {
      const end = moment(event.end).add(1, 'day').toDate();
      return { ...event, end };
    });

    setEvents(modifiedEvents);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};


    useEffect(()=>{
      fetchData()
    }
        
   ,[]);
   const [events, setEvents] = useState([]);
   const [selectedEvent, setSelectedEvent] = useState(null);

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
  


    const handleEventClick = (event) => {
      
      setSelectedEvent(event);
    };

    const handleCloseModal = () => {
      setSelectedEvent(null);
    };

  const eventStyleGetter = (event, start, end, isSelected) => {
  const backgroundColor = event.color;
  const style = {
    backgroundColor,
    borderRadius: '2px',
    margin:'0.5px',
    color: '#ffffff',
    border: 'none',
    display: 'block'
    
  };

  return {
    style
  };
};



  return (
    <React.Fragment>
      <div style={{display:'flex'}}>
        <ListItemIcon style={{display:'flex',justifyContent:'center',alignItems:'center',height:'30px'}}>
          <CalendarMonthTwoToneIcon />
        </ListItemIcon>
        
          <Title>Calendar</Title>
        
        
      </div>
      

        <Calendar 
            
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            eventPropGetter={eventStyleGetter}
            onSelectEvent={handleEventClick}
            
            style={{ height: 800 ,margin:"20px",zIndex:"0"}} 
            
            />
    
      
      


    {selectedEvent && (
        <div className="modal" 
            
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 600,
              height:"730px",
              backgroundColor: '#FFFFFF',
              border: '0.5px solid #101010',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
              p: 4,
              zIndex:'auto'
            }}>
          <div className="modal-content">
            <h3 style={{margin:"1rem",borderBottom:"2px solid #101010"}}>{selectedEvent.title}</h3>
          <table style={{ border: '1px solid #000000', borderCollapse: 'collapse', height: '600px',margin:"1rem"}}>
          <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>หัวข้อ</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p>{selectedEvent.topic}</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>วันที่สร้าง</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p>{formatDate(selectedEvent.create_date)}</p>
              </td>
            </tr>
          <tr>
              <td style={{ width: '300PX', paddingLeft: '7px' }}>
                <h4>ชื่อห้อง</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p
                  style={{
                    backgroundColor:selectedEvent.color,
                    width: '60%',
                    borderRadius: '5px',
                    textAlign: 'center',
                    color: '#FFFF',
                  }}
                >
                  {selectedEvent.name}
                </p>
              </td>
            </tr>
            
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>อาคาร/สถานที่</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p>{selectedEvent.build}</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>จำนวนที่นั่ง</h4>
              </td>
              <td style={{ width: '800PX', borderLeft: '1px solid #000000', paddingLeft: '7px' }}>
                <p>{selectedEvent.seat} ที่นั่ง</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>จำนวนผู้เข้าประชุม</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p>{selectedEvent.attend}</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>ชื่อผู้จอง</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p>{selectedEvent.fname}</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>โทรศัพท์</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p>{selectedEvent.tel}</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>วันที่</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p>{formatDate(selectedEvent.begin)} - {formatDate(selectedEvent.end-1)}</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>เวลา</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p>{selectedEvent.time_begin} - {selectedEvent.time_end}</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>ใช้สำหรับ</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p>{selectedEvent.usefor}</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>แผนกที่ขอใช้</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p>{selectedEvent.department_th}</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>อุปกรณ์</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p>{selectedEvent.item}</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>สถานะ</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p style={{backgroundColor:selectedEvent.color_stauts,color:'#FFFFFF',width:'15%',textAlign:'center',borderRadius:'4px'}}>{selectedEvent.status}</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: '300PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <h4>*เพิ่มเติม</h4>
              </td>
              <td style={{ width: '800PX', border: '1px solid #000000', paddingLeft: '7px' }}>
                <p>{selectedEvent.comment}</p>
              </td>
            </tr>

            

          </table>
            
              <div style={{width:"100%",display:'flex',justifyContent:'right'}}>
                <Closebtn>
                  <button  onClick={handleCloseModal} class="button-24" role="button">Close</button>
                </Closebtn>
              </div>          
            
          </div>
        </div>
      )}
      
    </React.Fragment>
  );
}