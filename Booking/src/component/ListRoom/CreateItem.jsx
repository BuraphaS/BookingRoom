import React, { useState } from 'react'
import { Table } from './styled'
import Axios from 'axios'

const CreateItem = () => {

    const [item,setItem] = useState("")


    const addItem = ()=>{
      Axios.post('http://localhost:3000/item',{
        item:item
      }).then(()=>{
        setListItem([
          ...ListItem,
          {
              item:item
          }
        ])
        
      })
      
    }
  
   
    return (
      <Table>
          <form>
                
              <label for="name">ชื่ออุปกรณ์</label>
              <input type="text" name="name" placeholder="Name" onChange={(event)=>{
                setItem(event.target.value)
              }} />
    
              <input type="submit" value="บันทึก" onClick={addItem} />
          </form>
      </Table>
    )
  }

export default CreateItem