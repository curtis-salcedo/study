import React from 'react';

// Component Imports
import DefinitionTable from './DefinitionTable';

import {
  Typography,
  Button,
  Box,
  Container,
  FormControl,
  TextField,
  MenuItem,
} from '@mui/material';

export default function DefinitionPage() {
  return (
    <>
      <div>Definition Page</div>
      <DefinitionTable />
      <p>Here is the table above me.</p>
    </>
  )
}