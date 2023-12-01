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
            <TableCell align="left">Definition</TableCell>
            <TableCell align="left">Notes</TableCell>
            <TableCell align="left">Sources</TableCell>
            <TableCell align="left">Tags</TableCell>
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
              <TableCell align="left">{word.definition}</TableCell>
              <TableCell align="left">{word.notes}</TableCell>
              <TableCell align="left">{word.defintion_id}</TableCell>
              <TableCell align="left">{word.tags.map((tag) => {
                return (
                  <Box key={tag.tag_id}>{tag.tag_name}</Box>
                )
              })}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}