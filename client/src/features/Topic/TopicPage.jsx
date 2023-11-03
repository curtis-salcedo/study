import React from 'react';
import { useState, useEffect, useContext } from 'react';

// Components
import TopicCard from '../../components/Cards/TopicCard';

// Utilities
import { DataContext } from '../../utilities/DataContext';

// Styles
import {
  Box,
  Paper,
} from '@mui/material';


export default function TopicPage() {
  const { activeData, activeTopic } = useContext(DataContext);
  const [ categoryTopics, setCategoryTopics ] = useState([]);

  useEffect(() => {
    
  }, []);
  
  console.log('activeTopic', activeTopic);
  return (
    <>
      <Paper>
        <h1>{activeTopic.name}</h1>
        <h2>{activeTopic.description}</h2>
        <h3>{activeTopic.notes}</h3>
        <h4>{activeTopic.analogies}</h4>
      </Paper>
    </>

  )
}