import React from 'react';

// Component Imports
import PrimaryCard from '../../components/Cards/PrimaryCard';
import AddButton from '../../components/Buttons/AddButton';

// Style Imports
import {
  Container,
  Box,
  AppBar,
  Typography,
  Button,

} from '@mui/material';


export default function Main() {

    return (
      <Box>
        <Box position="static" sx={{height:'sm'}}>
          <Container>
            <Typography variant="h6">
              Add:
              <AddButton />
              <Button>Topic</Button>
              <Button>Notes</Button>
              <Button>Definition</Button>
              <Button>Concept</Button>
            </Typography>
          </Container>
        </Box>
        <PrimaryCard />
      </Box>
    );
}