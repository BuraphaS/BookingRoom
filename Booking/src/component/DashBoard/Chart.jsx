import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title.jsx';
import Axios from 'axios';
import { useState,useEffect } from 'react';
function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const [columnCount, setColumnCount] = useState(0);

  useEffect(() => {
      Axios.get('http://localhost:3000/bookingtoday')
          .then(response => {
              setColumnCount(response.data.columnCount);
          })
          .catch(error => {
              console.log(error);
          });
  }, []);
  
  return (
    <React.Fragment>
      <div style={{textAlign:'right',color:'#595959'}}>
      <Title>Booking Now</Title>
      
      <Typography component="p" variant="h4"sx={{ margin:" 15px 0px" }}>
        <h4>{columnCount}</h4>
      </Typography>
      
      </div>
      
      <Typography style={{color:'#595959'}} color="text.secondary" sx={{ flex: 1 }}>
        on Today
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          
        </Link>
      </div>
    </React.Fragment>
  );
}