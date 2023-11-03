import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';


// Material UI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Card from '@mui/material/Card';

// Components
import AddButton from '../../components/Buttons/AddButton';
import CategoryCard from '../../components/Cards/CategoryCard';

// Pages
import TopicPage from '../../features/Topic/TopicPage';
import CategoryPage from '../../features/Category/CategoryPage';

// Utilities
import { DataContext } from '../../utilities/DataContext';
import { Box } from '@mui/material';

export default function Content() {
  const { categoryData, setCategoryData, topicsData, activeData } = useContext(DataContext);
  const [page, setPage] = useState('');

  useEffect(() => {
    
  }, [categoryData, page]);

  return (
    <Paper sx={{ height: '100%', margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
        >
        <Toolbar>Category Name</Toolbar>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <AddButton name="Topic" />
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>

      </AppBar>
      {/* <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        This is the main Content.jsx file that will house a special type of view to see most recent additions and topics.
      </Typography> */}

      { activeData.name ? 
        <Box
        sx={{
          minHeight: '100%',
          width: '100%',
          backgroundColor: 'blue',
        }}>
          <CategoryPage />
        </Box>
      : 
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        This is the main Content.jsx file that will house a special type of view to see most recent additions and topics.
      </Typography>
      }

      {/* { page ? 
        <TopicPage /> : null
      }
      <Routes>
        <Route path='/topics/:topicId' element={ <TopicPage topic='Test' /> } />
      </Routes>

      { categoryData ? categoryData.map((c) => {
        return (
          <CategoryCard key={c.id} c={c} setPage={setPage} page={page} />
        )
      }) : null } */}

    </Paper>
  );
}