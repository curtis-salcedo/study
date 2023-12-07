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
  Card,
  CardContent,
  CardActions,


} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

// Component
import TopicCard from '../../features/topics/TopicCard';

// Utilities
import { DataContext } from '../../utilities/DataContext';

// c = categoryData, t = topicsData
export default function CategoryCard({ c, t, setPage, page }) {
  const { categoryData, setCategoryData, topicsData } = useContext(DataContext);

  useEffect(() => {
    console.log('page at categorycard', page)
  }, []);

  return (
    <Paper sx={{ margin: 1, overflow: 'hidden' }}>

      <Card sx={{ minWidth: 275 }}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          }}
        >
        {/* This is the card header */}
          <Toolbar>
              <Typography>{c.name}</Typography>
          </Toolbar>
        </AppBar>
      <CardContent>

        <Typography>
          {c.description} 
        </Typography>

        <Grid sx={{
          display: 'flex',
        }}>
          {c.topics.map((topic) => (
            <TopicCard t={topic} setPage={setPage} />
          ))}
        </Grid>

      </CardContent>
      <CardActions>
        <Button size="small">Button for Something</Button>
      </CardActions>
    </Card>

      

    {/* This is where the Topic Links within the active category will go */}

    {/* This is where the breakdown of the Category will go */}
      

    </Paper>
  );
}