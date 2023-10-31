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
  const { formSelected, setFormSelected } = useContext(DataContext);

  return (
    <Button
      color="primary"
      disabled={false}
      size="medium"
      variant="outlined"
      onClick={ () => {
        setFormSelected(name)
      }}
    >
      {name}
    </Button>
  )
}