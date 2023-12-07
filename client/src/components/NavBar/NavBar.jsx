import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Style Imports
import { 
  AppBar,
  Breadcrumbs,
  Typography,
} from '@mui/material';


export default function NavBar() {
  const dispatch = useDispatch();
  const activeData = useSelector(state => state.activeData);

  const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  useState(() => {
    dispatch({ type: 'SET_ACTIVE_DATA', payload: 'Subjects' });
  console.log('activeData:', activeData)
  }
  , []);

  return (
    <>
      <AppBar color="primary" position="sticky" elevation={0} sx={{ textAlign: 'center' }}>
        <Breadcrumbs aria-label="breadcrumb">

          { activeData && activeData.activeSubject ? 
          <Typography
            underline="hover"
            color="text.secondary"
            href="/"
          >
            { activeData.activeSubject.name }
          </Typography>
          : 'Subject' }

          { activeData && activeData.activeCategory ?
          <Typography
            underline="hover"
            color="text.secondary"
            href="/"
          >
          { activeData.activeCategory.name }
          </Typography>
          : 'Category' }

          { activeData && activeData.activeTopic ?
          <Typography
            underline="hover"
            color="text.secondary"
            href="/"
          >
          { activeData.activeSubject.name }
          </Typography>
          : 'Topic' }

        </Breadcrumbs>
      </AppBar>
    </>
  );
}
