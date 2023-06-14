import React, { useState } from 'react'
import { Table } from './styled'
import Axios from 'axios'

const CreateDepartment = () => {

  const [usefor,setUsefor] = useState("")

  const addUsefor = ()=>{
    Axios.post('http://localhost:3000/usefor',{
        usefor:usefor,
        
    }).then(()=>{
      setListUsefor([
        ...ListDepartment,
        {
        
            usefor:usefor
        }
      ])
      
    })
    
  }

 
  return (
    <Table>
        <form>
              
           
            <label for="name">ใช้สำหรับ</label>
            <input type="text" name="name" placeholder="ชื่อ" onChange={(event)=>{
              setUsefor(event.target.value)
            }} />
  
            <input type="submit" value="บันทึก" onClick={addUsefor} />
        </form>
    </Table>
  )
}

export default CreateDepartment