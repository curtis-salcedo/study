import React from 'react';

import {
  Typography,
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  TextField,
} from '@mui/material';

// Components
import TagButton from '../Buttons/TagButton';


export default function NoteCard({ note }) {

  return (
      <Card
        elevation={3}
        sx={{ cursor: 'pointer',
        width: 200,
        height: 200,
        margin: 1,
        overflow: 'hidden' }}
      >
      <CardHeader align='center' title={note.topic} />

      <Divider light/>

      <CardActions>
        <Button>Click to open</Button>
      </CardActions>
    </Card>
  );
}