import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as subjectSlice from './subjectSlice';
import { Link } from 'react-router-dom';

import {
  addCategories,
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
  const activeSubject = useSelector(state => state.activeSubject);
  const categories = useSelector(state => state.categories);

  console.log(useSelector(state => state.activeSubject.id))

  const [ newCategory, setNewCategory ] = useState({
    subject_id: `${activeSubject.id}`,
    name: '',
    description: '',
  });
  const [ showForm, setShowForm ] = useState(false);

  useEffect(() => {
    console.log('SubjectPage useEffect', activeSubject);
  }, []);

  const handleAddSubject = () => {
    dispatch(subjectSlice.addSubject(newCategory));
    dispatch(addCategories(newCategory));
    setNewCategory({
      subject: activeSubject.id,
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

        <Grid container spacing={2}>
          { categories && categories.length > 0 ? (
            categories.map((subject, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  elevation={3}
                  // onClick={() => handleClick(subject)}
                >
                  <Link to={`/subjects/${subject.id}`} style={{ textDecoration: 'none' }}>
                    <Typography variant="h6" sx={{ marginBottom: 1 }}>
                      {subject.name}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                      {subject.description}
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
        </Grid>
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