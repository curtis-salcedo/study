import React from 'react';
import { useState, useEffect, useContext } from 'react';

import {
  Button,
  Typography,
  ListItemButton,
} from '@mui/material';

// Utilities
import { DataContext } from '../../utilities/DataContext';

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

export default function AddButton({ name }) {
  const [open, setOpen] = useState(false);
  const { formSelected, setFormSelected } = useContext(DataContext);

  return (
    <ListItemButton
      color="primary"
      disabled={false}
      size="medium"
      variant="outlined"
      sx={item}
      onClick={ () => {
        setFormSelected(name)
      }}
    >
      {name}
    </ListItemButton>
  )
}