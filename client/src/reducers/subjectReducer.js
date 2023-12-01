import { createReducer } from '@reduxjs/toolkit';
import { fetchSubjectsAsync } from '../actions/subjectActions';

const initialState = {
  subjects: [],
};

const subjectReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchSubjectsAsync.fulfilled, (state, action) => {
      state.subjects = action.payload; // Update subjects with fetched data
    })
    // Add other cases for different actions if needed
    .addDefaultCase((state) => state);
});

export default subjectReducer;
