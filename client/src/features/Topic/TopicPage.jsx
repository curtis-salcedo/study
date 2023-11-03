import React from 'react';
import { useState, useEffect, useContext } from 'react';

// Components
import TopicCard from '../../components/Cards/TopicCard';

// Utilities
import { DataContext } from '../../utilities/DataContext';

// Styles


export default function TopicPage({ category }) {
  const { activeData } = useContext(DataContext);
  const [ categoryTopics, setCategoryTopics ] = useState([]);

  useEffect(() => {
    setCategoryTopics(category.topics);
  }, [category]);
  
  console.log('activeData', category, categoryTopics);
  return (
    <>
      <div>Topic Page</div>
    </>

  )
}