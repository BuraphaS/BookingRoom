import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { Tab } from './styled';


const ListDepartment = () => {
    


    const [Department,setDepartment] = useState([]);




    const getDepartment = () =>{
        Axios.get('http://localhost:3000/department')
        .then ((response) => {
            setDepartment(response.data)
        })
    }

    const deleteData = (id) => {
        Axios.delete(`http://localhost:3000/deletedepartment/${id}`)
          
             alert('Delete Success')
             window.location.reload()
           
          .catch((error) => {
            console.error(error);
          });
      };
   
    
    useEffect(() => {
        getDepartment();
      }, []);
      
  return (
    
                                
        <>
           
        <Tab>
        <table>
            <tr style={{ textAlign: 'center',height:'40px',backgroundColor:'#f1f1f1' }}>
                <td>
                    <h3>ID</h3>
                </td>
                <td>
                    <h3>ชื่อแผนก</h3>
                </td>

                <td>
                   
                </td>
                
            </tr>
          {Department.map((val, index) => (
            <tr key={index} style={{height:'35px'}} >
              <td className="email" >
                <h4
                  style={{
                    textAlign: 'center',
                    color: '#101010',

                  }}
                >
                  {val.id}
                </h4>
                
              </td>
              <td className="item">
                <h4
                  style={{

                    width:'100%',
                    textAlign: 'center',
                    color: '#101010',
                  }}
                >
                  {val.department_th}
                </h4>
                
              </td>
          
                <td className="delete">
                    
                        <button className='btnde'  onClick={() => deleteData(val.id)}>
                        ลบ
                        </button>
                  
                </td>
             
                
              
            </tr>
          ))}
        </table>
       </Tab>  
        
        </>
        
    

  )
}

export default ListDepartment


