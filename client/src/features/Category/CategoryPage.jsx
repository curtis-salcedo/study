import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import TopicsList from '../topics/TopicsList';

// import {
//   activeReducer,
// } from '../../reducers/activeReducer';

import {
  addTopics,
} from '../topics/topicsActions'

// Styles
import {
  Box,
  TextField,
  Button,
} from '@mui/material';
import { Topic } from '@mui/icons-material';

export default function CategoryPage() {
  const dispatch = useDispatch();
  const activeSubject = useSelector(state => state.activeSubject);
  const allCategories = useSelector(state => state.categories);
  const [ showForm, setShowForm ] = useState(false);
  const [ newTopic, setNewTopic ] = useState({
    title: '',
    type: '',
    description: '',
    category: '',
  });

  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    // Fetch subjects when the component mounts

    setCategories(allCategories.filter(category => category.subject === activeSubject.id));
    
  }, [activeSubject, categories]);

  const handleSubmit = () => {
    dispatch(addTopics(newTopic));
    setNewTopic({
      subject: activeSubject.id ? activeSubject.id : null,
      name: '',
      description: '',
    });
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTopic({
      ...newTopic,
      [name]: value,
    });
  };

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      maxWidth: '600px',
      width: '100%',
      margin: 'auto',
    }}
  >
    <TextField
      label="New Category Name"
      variant="outlined"
      name="name"
      value={newTopic.name}
      onChange={handleChange}
      margin="normal"
      fullWidth
    />

    <TextField
      label="Description"
      variant="outlined"
      name="description"
      value={newTopic.description}
      onChange={handleChange}
      margin="normal"
      fullWidth
      multiline
      rows={4}
    />
      <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
        Add Subject
      </Button>

      <TopicsList />
      
    </Box>
  )
}