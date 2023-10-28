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

} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function TopicCard() {
  return (
    <Paper sx={{ maxWidth: 1260, margin: 'auto', overflow: 'hidden' }}>

      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
      {/* This is basically the topic header with edit button */}
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Typography>Topic Name Here</Typography>
          </Grid>
          <Button variant="contained" sx={{ mr: 1 }}>
            Open
          </Button>
        </Toolbar>
      </AppBar>

    {/* This is where the breakdown of the topic will go */}
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        There is no information for this topic yet, add a note.
      </Typography>

    </Paper>
  );
}