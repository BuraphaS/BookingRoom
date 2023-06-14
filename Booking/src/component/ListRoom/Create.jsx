import React, { useState } from 'react'
import { Table } from './styled'
import Axios from 'axios'

const Create = () => {

  const [name,setName] = useState("")
  const [color,setColor] = useState("")
  const [detail,setDetail] = useState("")
  const [build,setBuild] = useState("")
  const [seat,setSeat] = useState(0)

  const addList = ()=>{
    Axios.post('http://localhost:3000/listroom',{
      name: name,
      color:color,
      detail:detail,
      build:build,
      seat:seat
    }).then(()=>{
      setListRoom([
        ...ListRoom,
        {
          name: name,
          color:color,
          detail:detail,
          build:build,
          seat:seat
        }
      ])
      
    })
    
  }

 
  return (
    <Table>
        <form>
              
            <label for="name">ชื่อห้อง</label>
            <input type="text" name="name" placeholder="Name" onChange={(event)=>{
              setName(event.target.value)
            }} />
            <label for="color">สีห้อง</label>
            <br/>
            <input type="color" name="color" id="color" onChange={(event)=>{
              setColor(event.target.value)
            }} />
            
            <br/>
            <label for="detail">รายละเอียด</label>
            <input type="text" name="detail" placeholder="Detail" onChange={(event)=>{
              setDetail(event.target.value)
            }}/>
            <label for="build">อาคาร/สถานที่</label>
            <input type="text" name="build" placeholder="Building" onChange={(event)=>{
              setBuild(event.target.value)
            }}/>
            <label for="seat">จำนวนที่นั่ง</label>
            <input type="text" name="seat" placeholder="Seat" onChange={(event)=>{
              setSeat(event.target.value)
            }}/>

        
            
            
            <input type="submit" value="บันทึก" onClick={addList} />
        </form>
    </Table>
  )
}

export default Create