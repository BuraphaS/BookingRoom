import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios'

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const [columnCount, setColumnCount] = useState(0);

  useEffect(() => {
      Axios.get('http://localhost:3000/columnCount')
          .then(response => {
              setColumnCount(response.data.columnCount);
          })
          .catch(error => {
              console.log(error);
          });
  }, []);

  return (
    <React.Fragment>
      <Title>ALL Room</Title>           
      <Typography component="p" variant="h4" sx={{ margin:" 30px 0px" }}>
        <h4>{columnCount}</h4>
      </Typography>
      
       <Typography color="text.secondary" sx={{ flex: 1 }}>
        on Today
      </Typography>                   
                        
      
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          
        </Link>
      </div>
    </React.Fragment>
  );
}