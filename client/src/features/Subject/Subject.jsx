import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as subjectSlice from '../../reducers/subjectSlice';
import addSubjectAsync from '../../actions/subjectActions';
import fetchSubjectsAsync from '../../actions/subjectActions';

// Style imports
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from '@mui/material';

export default function Subject() {
  const dispatch = useDispatch();
  const subjects = useSelector(state => state.subjects);
  const [newSubject, setNewSubject] = useState({
    name: '',
    description: '',
  });

  const handleAddSubject = () => {
    dispatch(subjectSlice.addSubject(newSubject));
    dispatch(addSubjectAsync(newSubject));
    setNewSubject({
      name: '',
      description: '',
    });
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

  console.log('subjects', subjects)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        maxWidth: '400px',
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
          { subjects && subjects.subjects.length > 0 ? (
            // Conditional check to ensure subjects exist and it's not an empty array
            subjects.subjects.map((subject, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    {subject.name}
                  </Typography>
                  <Typography variant="body1">
                    {subject.description}
                  </Typography>
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

      {/* You can map through 'subjects' to render them */}

    </Box>
  );
}
