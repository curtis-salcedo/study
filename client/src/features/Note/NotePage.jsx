import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  TextField,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

// Components
import TagButton from '../../components/Buttons/TagButton';

export default function NotePage({ note }) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingContent, setIsEditingContent] = useState(false);
  const [formData, setFormData] = useState({
    note_id: note.note_id,
    topic: note.topic,
    title: note.title,
    content: note.content,
    tags: [],
  });

  const handleEditTitleSave = () => {
    if (isEditingTitle) {
      // Save changes to your data store or state
      // You may want to add validation and other necessary logic here
      // For simplicity, we're just updating the formData here
      setFormData({ ...formData });
    }
    setIsEditingTitle(!isEditingTitle);
  };

  const handleEditContentSave = () => {
    if (isEditingContent) {
      // Save changes to your data store or state
      // You may want to add validation and other necessary logic here
      // For simplicity, we're just updating the formData here
      setFormData({ ...formData });
    }
    setIsEditingContent(!isEditingContent);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('handleChange', formData)
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleUpdate = (e) => {
    console.log('handleSubmit', formData);
    axios.put(`http://localhost:8000/api/notes/${formData.note_id}/`,  formData )
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setIsEditingTitle(!isEditingTitle);
  }

  const handleTitleEdit = () => {
    setIsEditingTitle(!isEditingTitle);
  };

  const handleContentEdit = () => {
    setIsEditingContent(!isEditingContent);
  };

  // Populate the title with "Untitled" if it's empty
  const getTitleDisplay = () => {
    if (formData.title.trim() === '') {
      return "Untitled";
    }
    return formData.title;
  };

  return (
    <Card elevation={3}  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        title={
          <div>
            {isEditingTitle ? (
              <TextField
                name="title"
                label="Note Title"
                value={formData.title}
                onChange={handleChange}
              />
            ) : (
              getTitleDisplay()
            )}
            {isEditingTitle ? (
              <IconButton onClick={handleEditTitleSave}>
                <EditIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleTitleEdit}>
                <EditIcon />
              </IconButton>
            )}
          </div>
        }
      />
      
      <Divider light/>

      <CardContent
        sx={{ 
          // Make content grow and fill available space
          flex: '1',
          backgroundColor: 'lightgray',
        }} 
        onDoubleClick={handleContentEdit}
      >
        {isEditingContent ? (
          <TextField
            sx={{ height: '100%', width: '100%' }}
            name="content"
            label="Note Content"
            value={formData.content}
            onChange={handleChange}
            multiline
            fullWidth
            rows={10}

          />
        ) : (
          <Typography variant="body1">{formData.content}</Typography>
        )}
      </CardContent>

      <Divider light/>

      <CardActions>
        {/* <Button onClick={handleEdit}>Edit</Button> */}
        <Button>Definitions</Button>
        <TagButton name="Add" />
        {note.tags ? note.tags.map((tag) => (
          <TagButton key={tag.name} name={tag.name} />
        )) : null }
      </CardActions>

    </Card>
  );
}