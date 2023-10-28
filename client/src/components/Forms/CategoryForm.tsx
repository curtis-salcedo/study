import React from 'react';


// Component Imports
import {
  Typography,
  Button,
  Box,
  Container
} from '@mui/material';


export default function CategoryForm() {
  
      return (
        <Box>
          <Box position="static" sx={{height:'sm'}}>
            <Container>
              <Typography variant="h6">
                Add:
                <Button>Topic</Button>
                <Button>Notes</Button>
                <Button>Definition</Button>
                <Button>Concept</Button>
              </Typography>
            </Container>
          </Box>
        </Box>
      );
}