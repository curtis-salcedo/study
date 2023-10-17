import * as React from 'react';

import {
  Button,
  Typography,
} from '@mui/material';

export default function TagButton() {
  return (
    <Button
      color="primary"
      disabled={false}
      size="small"
      variant="text"
    >
      Tag
    </Button>
  );
}

