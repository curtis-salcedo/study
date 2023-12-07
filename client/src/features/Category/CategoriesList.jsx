import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style imports
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenIcon from '@mui/icons-material/OpenInNew';

import {
  setActiveCategory,
} from './categoriesActions';

export default function CategoriesList({ categories }) {
  const dispatch = useDispatch();
  const activeData = useSelector(state => state.activeData);

  const handleClick = (id) => {
    console.log('open at category id of', id);
    let activeCategory = categories.find(category => category.id === id);
    setActiveCategory({activeCategory});
  }

  const handleDelete = () => {
    console.log('delete');
  }

  useEffect(() => {
    console.log('activeData', activeData)
  }
  , [activeData]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Number of Topics</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Last Updated</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>
                <IconButton
                  aria-label="open"
                  onClick={() => handleClick(category.id)}
                >
                  <OpenIcon />
                </IconButton>
              </TableCell>
              <TableCell>{category.id}</TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
              <TableCell>{ category.topics ? category.topics.length : 0 }</TableCell>
              <TableCell>{category.created}</TableCell>
              <TableCell>{category.updated}</TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  onClick={handleDelete}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>
  )
}