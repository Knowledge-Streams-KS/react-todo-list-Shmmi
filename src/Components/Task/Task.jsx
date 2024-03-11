import React from 'react'
import Header from '../Header'
import { useState } from 'react';
import "./Task.css"
import Tasklist from '../Tasklist/Tasklist';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const Task = () => {

const [name,setName] = useState("");
const handlename = (e) =>{
    setName(e.target.value)
}

const [email,setEmail] = useState("");
const handleemail = (event)=>{
setEmail(event.target.value)
}

const[data,setData] = useState([]);
const addData = () =>{
    setData([...data,{name:name,email:email}])
    setName("")
    setEmail("")
}
const remData = (index)=>{
    let arr = data;
    arr.splice(index,1)
    setData([...arr])
}

  return (
    <div>
      <Header/>
      <div className='form'>
      <Stack direction="row" spacing={2}>
      <TextField  value={name} onChange={handlename} id="filled-basic" label="Name" variant="filled" />
      <TextField  value={email} onChange={handleemail} id="filled-basic" label="Email" variant="filled" />
      <Button onClick={addData} variant="contained" href="#contained-buttons">Add</Button>
      </Stack>
      </div>
      <div className='container'>
      <div className='childcontainer' >
       <h3>Name</h3>
       <h3>Email</h3>
       <h3>Remove</h3>
     
      
       </div>
       {data.map((element,index)=>{
      return (<Tasklist key={index} name = {element.name} email={element.email} index={index} rem={remData}/>
       )})}
      </div>
    </div>
  )
}

export default Task;
