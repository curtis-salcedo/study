import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import {
  Button,
  Typography,
} from '@mui/material';

export default function AddButton({ children }: any) {

  const [data, setData] = useState({
    name: '',
  })

  const handleChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
    console.log(data)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios.post('http://localhost:8000/tags/', data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      });
    console.log(data)
  }  

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(children)
  }

  return (
    <Button
      color="primary"
      disabled={false}
      size="medium"
      variant="outlined"
      onClick={ (e) => handleClick(e) }
    >
      {children}
    </Button>
  )
}