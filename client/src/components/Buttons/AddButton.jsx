import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import {
  Button,
  Typography,
} from '@mui/material';

export default function AddButton({ name, setActiveChoice }) {
  const [open, setOpen] = useState(false);


  return (
    <Button
      color="primary"
      disabled={false}
      size="medium"
      variant="outlined"
      onClick={ () => {
        setActiveChoice(name)
      }}
    >
      {name}
    </Button>
  )
}