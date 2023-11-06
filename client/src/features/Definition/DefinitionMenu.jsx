import React from 'react';

import {
  Box,

} from '@mui/material';

export default function DefinitionMenu({ definitions }) {


  return (
    <Box>
      { definitions ? definitions.map((d) => (
        <div>
          <h3>{d.word}</h3>
          <p>{d.definition}</p>
        </div>
      )) : null}
    </Box>
  )
}