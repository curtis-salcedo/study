import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as subjectSlice from './subjectsSlice';
import { Link } from 'react-router-dom';

import CategoriesList from '../Category/CategoriesList';

import {
  addCategories,
  fetchCategories,
} from '../Category/categoriesActions';


// Style imports
import {
  Grid,
  Paper,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  TextField,
  Card,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SubjectPage() {
  const dispatch = useDispatch();
  const activeSubject = useSelector(state => state.activeData.activeSubject);
  const [ showForm, setShowForm ] = useState(false);
  const [ categories, setCategories ] = useState([]); // activeSubject.categories
  
  const [ newCategory, setNewCategory ] = useState({
    subject: activeSubject.id,
    name: '',
    description: '',
  });

  
  useEffect(() => {
    // Fetch subjects when the component mounts    
    setCategories(activeSubject.categories);
  }, [activeSubject ]);

  const handleAddSubject = () => {
    dispatch(addCategories(newCategory));
    setNewCategory({
      subject: activeSubject.id ? activeSubject.id : null,
      name: '',
      description: '',
    });
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({
      ...newCategory,
      [name]: value,
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        maxWidth: '600px',
        width: '100%',
        margin: 'auto',
      }}
    >
      <TextField
        label="New Category Name"
        variant="outlined"
        name="name"
        value={newCategory.name}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Description"
        variant="outlined"
        name="description"
        value={newCategory.description}
        onChange={handleChange}
        margin="normal"
        fullWidth
        multiline
        rows={4}
      />

      <Button variant="contained" color="primary" onClick={handleAddSubject} fullWidth>
        Add Subject
      </Button>

      <Box mt={4} width="100%">
        <Typography variant="h5" align="center" mb={2}>
          Categories for { activeSubject ? activeSubject.name : null }
        </Typography>

        <CategoriesList categories={categories} />

        {/* <Grid container spacing={2}>
          { categories && categories.length > 0 ? (
            categories.map((category, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  elevation={3}
                  // onClick={() => handleClick(subject)}
                >
                  <Link to={`/categories/${category.id}`} style={{ textDecoration: 'none' }}>
                    <Typography variant="h6" sx={{ marginBottom: 1 }}>
                      {category.name}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                      {category.description}
                    </Typography>
                    <IconButton>
                      <DeleteIcon sx={{ color: 'error.main' }} />
                    </IconButton>
                  </Link>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                No categories available yet for { activeSubject ? activeSubject.name : null }.
              </Typography>
            </Grid>
          )}
        </Grid> */}
      </Box>

      {/* Delete Confirmation Dialog */}
      <Dialog
        // open={deleteConfirmation}
        // onClose={handleDeleteCancel}
      >
        {/* ... Dialog content remains unchanged ... */}
      </Dialog>
    </Box>
  );
}