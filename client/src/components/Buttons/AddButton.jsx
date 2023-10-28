import React from 'react';
import { useState, useEffect, useContext } from 'react';

import {
  Button,
  Typography,
} from '@mui/material';

// Utilities
import { DataContext } from '../../utilities/DataContext';

export default function AddButton({ name }) {
  const [open, setOpen] = useState(false);
  const { activeChoice, setActiveChoice } = useContext(DataContext);
  console.log('activeChoice in AddButton', activeChoice)

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