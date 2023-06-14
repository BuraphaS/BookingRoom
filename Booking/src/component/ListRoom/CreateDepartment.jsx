import React, { useState } from 'react'
import { Table } from './styled'
import Axios from 'axios'

const CreateDepartment = () => {

  const [department,setDepartment] = useState("")
  const [department_th,setDepartment_th] = useState("")


  const addDepartment = ()=>{
    Axios.post('http://localhost:3000/department',{
        department:department,
        department_th:department_th
    }).then(()=>{
      setListDepartment([
        ...ListDepartment,
        {
            department:department,
            department_th:department_th
        }
      ])
      
    })
    
  }

 
  return (
    <Table>
        <form>
              
           
            <label for="name">ชื่อแผนก</label>
            <input type="text" name="name" placeholder="ชื่อ" onChange={(event)=>{
              setDepartment_th(event.target.value)
            }} />
  
            <input type="submit" value="บันทึก" onClick={addDepartment} />
        </form>
    </Table>
  )
}

export default CreateDepartment