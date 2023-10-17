import React from 'react';

import {
  Typography,
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

// Component Imports

export default function DefinitionCard() {

  return (
    <Card elevation={3}>
      <CardHeader
        title="Definition Title / CardHeader"
      />
      <CardContent>
        <Typography>This is the card content</Typography>
      </CardContent>
      <CardActions>
        <Button>Stack Overflow</Button>
        <Button>Stack Overflow</Button>
        <Button>Stack Overflow</Button>
      </CardActions>
    </Card>
  );
}