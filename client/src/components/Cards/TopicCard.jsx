import * as React from 'react';
import { useState, useEffect, useContext } from 'react';

// Styles
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  Tooltip,
  IconButton,
  Box,
  CardActions,

} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

// Utilities
import { DataContext } from '../../utilities/DataContext';

export default function TopicCard({ t }) {
  const { categoryData, setCategoryData, activeTopic, setActiveTopic,topicsData, activeData } = useContext(DataContext);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('clicked', t.topic_id)
    setActiveTopic(t)
  }

  console.log(activeTopic)

  return (
    <Paper sx={{ cursor: 'pointer', width: 300, height: 300, margin: 1, overflow: 'hidden' }} onClick={handleClick}>

      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', height: '25%' }}
        >

      {/* This is the topic header with edit button */}
        <Toolbar>
        <Typography sx={{ my: 5, mx: 2 }} color="text" align="center">
        {t.name}
      </Typography>
          {/* <Grid container spacing={0} alignItems="center">
            <Typography>{t.name}</Typography>
          </Grid> */}
        </Toolbar>
      </AppBar>

      {/* This is where the breakdown of the topic will go */}
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        {t.description}
      </Typography>
    </Paper>
  );
}