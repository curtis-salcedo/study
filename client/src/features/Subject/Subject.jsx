import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as subjectSlice from './subjectSlice';

// Router imports
import { Link } from 'react-router-dom';
import SubjectPage from './SubjectPage';

// State Management imports
import {
  fetchSubjects,
  addSubjects,
  deleteSubjects,
  setActiveSubject,
} from './subjectActions';

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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Subject() {
  const dispatch = useDispatch();
  const subjects = useSelector(state => state.subjects);
  const activeSubject = useSelector(state => state.activeSubject); // Assuming activeSubject is stored in Redux state
  const [showForm, setShowForm] = useState(false);
  const [newSubject, setNewSubject] = useState({
    name: '',
    description: '',
  });
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleAddSubject = () => {
    dispatch(subjectSlice.addSubject(newSubject));
    dispatch(addSubjects(newSubject));
    setNewSubject({
      name: '',
      description: '',
    });
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSubject({
      ...newSubject,
      [name]: value,
    });
  };

  useEffect(() => {
    // Fetch subjects when the component mounts
  }, []);

  const handleDeleteClick = (subject) => {
    setSelectedSubject(subject);
    setDeleteConfirmation(true);
  };

  const handleDeleteConfirm = () => {
    // Delete logic for the selected subject (e.g., dispatch action to remove from Redux state)
    dispatch(deleteSubjects(selectedSubject.id));
    setDeleteConfirmation(false);
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmation(false);
  };

  const handleClick = (subject) => {
    // Handle logic for when a subject is clicked (e.g., dispatch action to set active subject in Redux state)
    console.log(subject)
    // setSelectedSubject(subject);
    dispatch(setActiveSubject({subject}));
  };

  console.log('subjects', subjects)

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
        label="Subject Name"
        variant="outlined"
        name="name"
        value={newSubject.name}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Description"
        variant="outlined"
        name="description"
        value={newSubject.description}
        onChange={handleChange}
        margin="normal"
        fullWidth
        multiline
        rows={4}
      />

      <Button variant="contained" color="primary" onClick={handleAddSubject} fullWidth>
        Add Subject
      </Button>

      {/* Display your subjects obtained from the Redux store */}
      <Box mt={4} width="100%">
        <Typography variant="h5" align="center" mb={2}>
          My Subjects
        </Typography>

        <Grid container spacing={2}>
          { subjects && subjects.length > 0 ? (
            // Conditional check to ensure subjects exist and it's not an empty array
            subjects.map((subject, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={3}
                  sx={{ p: 2, textAlign: 'center', height: '100%', cursor: 'pointer' }}
                  onClick={() => handleClick(subject)}
                  >
                  <Link to={`/subjects/${subject.id}`} style={{ textDecoration: 'none' }}>
                    <Typography variant="h6" gutterBottom>
                      {subject.name}
                    </Typography>
                    <Typography variant="body1">
                      {subject.description}
                    </Typography>
                    <IconButton onClick={() => handleDeleteClick(subject)}>
                      <DeleteIcon />
                    </IconButton>
                  </Link>
                </Paper>
              </Grid>
            ))
          ) : (
            // Render a message when there are no subjects
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                No subjects available yet.
              </Typography>
            </Grid>
          )}
          
        </Grid>
      </Box>
      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteConfirmation}
        onClose={handleDeleteCancel}
      >
        <DialogTitle>Delete Subject</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete this subject?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* You can map through 'subjects' to render them */}

    </Box>
  );
}
