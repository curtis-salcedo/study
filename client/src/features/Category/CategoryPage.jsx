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
  const { categoryData, setCategoryData, topicsData, activeData } = useContext(DataContext);
  const [ activeTopic, setActiveTopic ] = useState(null);

  useEffect(() => {
    console.log('activeData', activeData);
    if (activeData.length === 1) {
      setActiveTopic(activeData[0]);
    }

  }, [categoryData, activeData]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'blue',
        overflow: 'auto',
      }}>

      { activeTopic ? 
        <TopicPage category={activeData} />
        :
        <>
        { activeData.topics.map((t) => (
            <TopicCard t={t} />
          
        ))}
        </>
      }
      
    </Box>
  )
}