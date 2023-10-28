import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import {
  Button,
  Typography,
} from '@mui/material';

export default function AddButton({ children }: any) {
  const [open, setOpen] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(children)
  }

  return (
    <Button
      color="primary"
      disabled={false}
      size="medium"
      variant="outlined"
      onClick={ (e) => handleClick(e) }
    >
      {children}
    </Button>
  )
}