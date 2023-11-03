import React from 'react';
import { useState, useContext } from 'react';
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

// Utilities
import { DataContext } from '../../utilities/DataContext';

export default function CategoryForm({ showForm, setShowForm }) {
  const { formSelected, setFormSelected } = useContext(DataContext);
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

  const handleClose = () => {
    setFormSelected(false)
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
          label="Category Name"
          variant="outlined"
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          name="description"
          id="outlined-multiline-flexible"
          label="Category Description"
          multiline
          minRows={6}
          maxRows={12}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <div>
        <Button onClick={handleClose}>Close</Button>
      </div>
    </Box>
  );
}