import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// Material UI
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

// Components
import AddButton from '../../components/Buttons/AddButton';
import CategoryCard from '../../components/Cards/CategoryCard';

// Pages
import TopicPage from '../../features/topics/TopicPage';
import CategoryPage from '../../features/Category/CategoryPage';
import Subject from '../../features/subjects/Subject';

// Utilities
import { DataContext } from '../../utilities/DataContext';
import { Box } from '@mui/material';

export default function Content() {
  const { categoryData, setCategoryData, topicsData, activeData } = useContext(DataContext);
  const [page, setPage] = useState('');

  useEffect(() => {
    
  }, [categoryData, page]);

  return (
    <Paper sx={{ height: '100%', margin: 'auto', maxWidth: 1 }}>
      { activeData.name ? 
        <Box
        sx={{
          height: '100%',
          width: '100%',
        }}>
          <Paper sx={{ height: '100%', margin: 'auto', maxWidth: 1 }}>
      { activeData.name ? (
        <Box sx={{ height: '100%', width: '100%' }}>
          {/* Render links to navigate to different routes */}
          <Link to="/topics">Topics</Link>
          <Link to="/categories">Categories</Link>

          {/* This will render the Subject component when the URL matches /subjects/:id */}
          {/* It will receive the id from the URL params */}
          <Route path="/subjects/:id" element={<Subject />} />
        </Box>
      ) : (
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
          This is the home page when activeData is not set.
        </Typography>
      )}
    </Paper>
        </Box>
      : 
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        This is the home page when activeData is not set. activeTopic is not set.
      </Typography>
      }
    </Paper>
  );
}