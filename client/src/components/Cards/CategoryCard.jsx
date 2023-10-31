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
  Card,
  CardContent,
  CardActions,


} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

// Component
import TopicCard from './TopicCard';

export default function CategoryCard({ c }) {
  return (
    <Paper sx={{ maxWidth: 400, margin: 1, overflow: 'hidden' }}>

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

        <Grid>
          { c.topics ? c.topics.map((t) => (
            <TopicCard t={t} />
          )) : null }
          <Button>Topic 1</Button>
          <Button>Topic 1</Button>
          <Button>Topic 1</Button>
          <Button>Topic 1</Button>
          <Button>Topic 1</Button>
          <Button>Topic 1</Button>
          <Button>Topic 1</Button>
          <Button>Topic 1</Button>
        </Grid>

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

      

    {/* This is where the Topic Links within the active category will go */}

    {/* This is where the breakdown of the Category will go */}
      

    </Paper>
  );
}