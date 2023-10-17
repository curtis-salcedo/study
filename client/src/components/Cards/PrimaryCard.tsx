import * as React from 'react';

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
import TagButton from '../Buttons/TagButton';
import DefinitionButton from '../Buttons/DefinitionButton';

export default function PrimaryCard() {

  return (
    <Card elevation={3}>
      <CardHeader
        title="PrimaryCard Title / CardHeader"
        subheader={<TagButton />}
      />
      <CardContent>
        <Typography>This is the card content</Typography>
      </CardContent>
      <CardContent>
        <Typography>This is the card definition button
          <DefinitionButton />
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Edit</Button>
      </CardActions>
    </Card>
  );
}