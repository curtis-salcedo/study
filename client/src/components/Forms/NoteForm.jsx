import React, { useEffect } from 'react';
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

export default function NoteForm() {
  const { activeData, activeTopic, setFormSelected, categoryData } = useContext(DataContext);

  useEffect(() => {
    setFormData(prevState => ({
      ...prevState,
      topic: activeTopic.topic_id,
    }));
  }, [activeTopic])

  const [ formData, setFormData ] = useState({
    topic: '',
    content: '',
    tags: [],
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
    console.log('handleSubmit', formData);
    axios.post('http://localhost:8000/api/add_notes/',  formData )
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
          disabled
          name='topic'
          id="outlined-basic"
          label="Topic"
          value={activeTopic.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          name="content"
          id="outlined-multiline-flexible"
          label="Note Content / Description"
          multiline
          minRows={6}
          maxRows={12}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          name="tags"
          id="outlined-basic"
          label="Tags"
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