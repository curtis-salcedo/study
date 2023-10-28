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
  MenuItem,

} from '@mui/material';


export default function AnalogyForm() {
  const [ formData, setFormData ] = useState({
    name: '',
    description: '',
  });

  // Fetch all the select options by getting all Topics

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
    axios.post('http://localhost:8000/api/add_analogy/',  formData )
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
          name="topic"
          id="outlined-select-currency"
          select
          label="Topic"
          onChange={handleChange}
        >
          <MenuItem key={1} value={'Topic 1'}>
            Topic 1
          </MenuItem>
          <MenuItem key={2} value={'Topic 2'}>
            Topic 2
          </MenuItem>
        </TextField>
      </div>

      <div>
        <TextField
          name="title"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          name="description"
          id="outlined-multiline-flexible"
          label="Analogy Description"
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