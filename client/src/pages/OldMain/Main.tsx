import React from 'react';

// Component Imports
import PrimaryCard from '../../components/Cards/PrimaryCard';
import AddButton from '../../components/Buttons/AddButton';

// Style Imports
import {
  Container,
  Box,
  Typography,
  AppBar,
  Button,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Main page to display area to add the following content:
// Quick Add: Category, Topic, Notes, Definition, Concept
// Previous 3 Topics for the most recent Category

// Left hand navigation with accordion for all Categories > Topics (restrict to 5 most recent topics to display)

export default function Main() {

  return (
    <Box>
      <Box position="static" sx={{height:'sm'}}>

        <Container>
          <Typography variant="h6">
            Quick Add:
            <AddButton>Category</AddButton>
            <AddButton>Topic</AddButton>
            <AddButton>Notes</AddButton>
            <AddButton>Definition</AddButton>
            <AddButton>Concept</AddButton>
          </Typography>
        </Container>

      </Box>
      <PrimaryCard />
    </Box>
  );
}