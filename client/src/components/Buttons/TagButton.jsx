import * as React from 'react';

import {
  Button,
  Typography,
} from '@mui/material';

const tagStyle = {
  height: '25px',
  width: '75px',
  margin: .5,
  overflow: 'hidden',
};

export default function TagButton({name}) {

  return (
    <Button
      sx={{ ...tagStyle }}
      variant="outlined"
    >
      <Typography variant="body2">{name}</Typography>
    </Button>
  );
}

