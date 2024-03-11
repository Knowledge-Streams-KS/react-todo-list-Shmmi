import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Height } from '@mui/icons-material';
const Tasklist = (props) => {
  return (
    <div className='childcontainer'>
        <h3>{props.name} </h3>
       <h3>{props.email}</h3>
       <Stack><Button onClick={props.rem} style={{height:"55px"}} variant="contained" href="#contained-buttons">Remove</Button></Stack>
    </div>
  )
}

export default Tasklist
