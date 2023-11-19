import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import {
  Box,
  Button,
  AddIcon,
  EditIcon,
  DeleteIcon,
  SaveIcon,
  CancelIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

// Utilities
import { DataContext } from '../../utilities/DataContext';

export default function DefintionTable() {
  const { categoryData, setCategoryData, topicsData, definitionsData, activeData } = useContext(DataContext);

  useEffect(() => {
    console.log('definitionsData: ', definitionsData);
  }, [definitionsData]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Word</TableCell>
            <TableCell align="right">Definition</TableCell>
            <TableCell align="right">Notes</TableCell>
            <TableCell align="right">Sources</TableCell>
            <TableCell align="right">Tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {definitionsData.map((word) => (
            <TableRow
              key={word.definition_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {word.word}
              </TableCell>
              <TableCell align="right">{word.definition}</TableCell>
              <TableCell align="right">{word.notes}</TableCell>
              <TableCell align="right">{word.defintion_id}</TableCell>
              <TableCell align="right">null</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}