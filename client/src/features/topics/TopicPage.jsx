import React from 'react';
import { useState, useEffect, useContext } from 'react';

// Styles
import {
  Box,
  Paper,
  Grid,
  Container,
  Header,
  Main,
  Typography,
  Button,
  Divider,
  Card,
  CardHeader,
  CardActions,

} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

// Components
import TopicCard from './TopicCard';
import DefinitionMenu from '../Definition/DefinitionMenu';
import NoteCard from '../../components/Cards/NoteCard';
import NotePage from '../Note/NotePage';
import NoteForm  from '../../components/Forms/NoteForm';

// Utilities
import { DataContext } from '../../utilities/DataContext';

const definitions = [
  {word: "word-one", definition: "the definition of word one"},
  {word: "word-two", definition: "the definition of word two"},
  {word: "word-three", definition: "the definition of word three"},
  {word: "word-four", definition: "the definition of word four"},
  {word: "word-five", definition: "the definition of word five"},
]

const notecards = [
  {
    name: 'Notecard Topic 1',
    content: 'This is the content of the note card',
    tags: [
      {
        name: 'tag1',
        description: 'this is the description of tag1',
      },
      {
        name: 'tag2',
        description: 'this is the description of tag',
      },
      {
        name: 'ta3',
        description: 'this is the description of tag3'
      },
    ]
  },
  {
    name: 'Notecard Topic 2',
    content: 'This is the content of the note card',
    tags: [
      {
        name: 'tag1',
        description: 'this is the description of tag1',
      },
      {
        name: 'tag3',
        description: 'this is the description of tag3',
      },
      {
        name: 'tag4',
        description: 'this is the description of tag4'
      },
    ]
  }
]


export default function TopicPage() {
  const { activeTopic, activeNote, setActiveNote } = useContext(DataContext);
  // const [ activeNote, setActiveNote ] = useState(null);
  const [ showForm, setShowForm ] = useState(false);

  const handleNoteClick = (e, note) => {
    e.preventDefault();
    console.log('clicked', note)
    setActiveNote(note)
  }

  const handleFormClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm)
  }

  useEffect(() => {
    
  }, [activeNote])

  return (
    
    <Container sx={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ }} color="text" align="center">{activeTopic.name}</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ }} color="text.secondary" align="center">{activeTopic.description}</Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}  >
        { showForm ?
          <Grid item xs={12}>
            <NoteForm />
          </Grid>
          : null
        }
      </Grid>

      { activeNote ?
      <Box sx={{ flexGrow: 1 }} >
        <NotePage note={activeNote} />          
      </Box>
      : null }

        
      <Box 
      container
      sx={{
          display: 'flex',
          width: '100%',
          overflowX: 'scroll',
      }}>
        <Card
          elevation={3}
          sx={{ 
            cursor: 'pointer',
            width: 150,
            height: 150,
            margin: 1,
          }}
          onClick={handleFormClick}
        >
          <CardActions>
            <Button>Add a Note</Button>
          </CardActions>
        </Card>


        { activeTopic.notes.map((note) => (
          // <NoteCard note={note} onClick={(e) => handleNoteClick(e, note)} />
          <Card
              elevation={3}
              sx={{ 
                cursor: 'pointer',
                width: 150,
                height: 150,
                margin: 1,
                overflow: 'hidden' 
              }}
              onClick={(e) => handleNoteClick(e, note)}
              >

            <CardHeader align='center' title={note.title} />
      
            <Divider light/>
      
            <CardActions>
              <Button>Click to open</Button>
            </CardActions>
          </Card>
        ))}
        </Box>



        {/* <Grid item sx={12}>
          <DefinitionMenu definitions={definitions} />
        </Grid> */}
        {/* <Grid item sx={{ alignSelf: 'center'}}>
          <Button onClick={() => setShowDefinitions(!showDefinitions)}>
            {showDefinitions ? 'Hide Definitions' : 'Show Definitions'}
          </Button>
          {showDefinitions && <DefinitionMenu definitions={definitions} />}
        </Grid> */}
    </Container>

  )
}