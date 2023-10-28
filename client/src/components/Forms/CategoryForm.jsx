import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// Component Imports
import {
  Typography,
  Button,
  Box,
  Container,
  FormControl,
  TextField,

} from '@mui/material';

export default function CategoryForm() {
  const [ formData, setFormData ] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    console.log('handleChange', formData)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit', formData);
    axios.post('http://localhost:8000/api/add_category/',  formData )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <div>
        <TextField
          name="name"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          name="description"
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          minRows={6}
          maxRows={12}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Box>
  );
}