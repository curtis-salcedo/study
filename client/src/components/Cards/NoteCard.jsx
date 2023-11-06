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
} from '@mui/material';

// Components
import TagButton from '../Buttons/TagButton';


export default function NoteCard({ note }) {

  return (
    <Card elevation={3} sx={{ margin: 2 }}>
      <CardHeader title={note.topic} />

      <Divider light/>

      <CardContent>
        <Typography variant="body1" >{note.content}</Typography>
      </CardContent>

      <Divider light/>

      <CardActions>
        <Button>Edit</Button>
        <Button>Definitions</Button>
        <TagButton name="Add" />
        {note.tags ? note.tags.map((tag) => (
          <TagButton key={tag.name} name={tag.name} />
        )) : null }
      </CardActions>
    </Card>
  );
}