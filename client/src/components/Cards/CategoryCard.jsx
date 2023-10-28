import * as React from 'react';

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

} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

// Component
import TopicCard from './TopicCard';

export default function CategoryCard() {
  return (
    <Paper sx={{ maxWidth: 1260, margin: 'auto', overflow: 'hidden' }}>

      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
      {/* This is basically the paper header */}
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Typography>Category Name</Typography>
          </Grid>
        </Toolbar>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search for a topic within this category"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ mr: 1 }}>
                Add Topic
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

    {/* This is where the Topic Links within the active category will go */}

    {/* This is where the breakdown of the Category will go */}
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        There are no topics for this category yet, they will display as cards here if needed.
      </Typography>

    </Paper>
  );
}