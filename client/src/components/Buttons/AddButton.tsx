import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function AddTag() {

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

  return (
    <>
      <input type="text" name='name' onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}