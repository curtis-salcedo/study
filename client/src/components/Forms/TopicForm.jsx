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
  MenuItem,

} from '@mui/material';

// Utilities
import { DataContext } from '../../utilities/DataContext';

export default function TopicForm({ showForm, setShowForm }) {
  const { formSelected, setFormSelected, categoryData } = useContext(DataContext);

  const [ formData, setFormData ] = useState({
    name: '',
    description: '',
    category_id: '',
    url: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('handleChange', formData)
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit', formData);
    axios.post('http://localhost:8000/api/add_topics/',  formData )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  const handleClose = () => {
    setFormSelected(false)
  }

  console.log(categoryData.map((category) => category))

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
          name="category_id"
          id="outlined-select-currency"
          select
          label="Category"
          value={formData.category_id ? formData.category_id : ""}
          onChange={handleChange}
        >
          { categoryData ? categoryData.map((c) => (
            <MenuItem key={c.category_id} value={c.category_id} name={c.name}>
              {c.name}
            </MenuItem>
          )) : null }
        </TextField>
      </div>

      <div>
        <TextField
          name="name"
          id="outlined-basic"
          label="Topic Title"
          variant="outlined"
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          name="description"
          id="outlined-multiline-flexible"
          label="Topic Description"
          multiline
          minRows={6}
          maxRows={12}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          name="url"
          id="outlined-basic"
          label="URL Reference"
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