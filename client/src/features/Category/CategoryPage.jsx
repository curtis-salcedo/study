import React from 'react';
import { useState, useEffect, useContext } from 'react';
// Styles
import {
  Box,
  Paper,
} from '@mui/material';

// Utilities
import { DataContext } from '../../utilities/DataContext';

// Components
import TopicCard from '../../components/Cards/TopicCard';

import TopicPage from '../Topic/TopicPage';

export default function CategoryPage() {
  const { categoryData, setCategoryData, activeTopic, setActiveTopic,topicsData, activeData } = useContext(DataContext);

  const [ topic, setTopic ] = useState(false);

  useEffect(() => {
    if (activeTopic) {
      setTopic(false);
    } else {
      setTopic(true);
    }
  }, [categoryData, activeData, activeTopic]);
  
  console.log('activeData', activeData);
  console.log('activeTopic', activeTopic);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        overflow: 'auto',
      }}>

      { activeTopic ? 
          <TopicPage t={activeTopic} />
        :
        <>
        { activeData && activeData.topics.map((t) => (
            <TopicCard t={t} />
        ))}
        </>
      }

    </Box>
  )
}