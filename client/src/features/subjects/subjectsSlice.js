// subjectSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '',
    name: '',
    description: '',
    category: '',
  },
  { id: 1,
    name: 'Math',
    description: 'Mathematics',
    category: 'Mathematics',
  },
  // Other initial state...
];

const subjectsSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    activeSubjectSelected: (state, action) => {
      // This will directly modify state in this case
      state.activeSubject = action.payload;
    },
    // Action creators go here
    // You can still define action creators to be used in your components
    addSubject: (state, action) => {
      // This won't directly modify state in this case
      // It dispatches an action that subjectReducer.js will respond to
      return state;
    },
    removeSubject: (state, action) => {
      return state;
    },
    updateSubject: (state, action) => {
      return state;
    },
  },
});

export const { addSubject, removeSubject, updateSubject } = subjectsSlice.actions;

export const selectAllSubjects = state => state.subjects;
export const { activeSubjectSelected } = subjectsSlice.actions;

export default subjectsSlice.reducer;



// // Action creator to add a new subject
// import addSubjectAsync, { fetchSubjectsAsync } from '../actions/subjectActions';

// // Initial state for subjects slice
// const initialState = {
//   subjects: [], // Array to hold subject objects
// };

// // Create a subjectSlice using createSlice from Redux Toolkit
// const subjectSlice = createSlice({
//   name: 'subjects', // Name of the slice
//   initialState, // Initial state
//   reducers: {
//     // Reducer to add a new subject to the state
//     addSubject: (state, action, builder) => {
//       state.subjects.push(action.payload); // Push the new subject object into the subjects array
//     },

//     // Reducer to remove a subject from the state
//     removeSubject: (state, action) => {
//       // Filter out the subject with the provided ID from the subjects array
//       state.subjects = state.subjects.filter(subject => subject.id !== action.payload);
//     },

//     // Reducer to update an existing subject in the state
//     updateSubject: (state, action) => {
//       const { id, ...updatedData } = action.payload; // Extract the ID and updated data from the payload
//       const existingSubject = state.subjects.find(subject => subject.id === id); // Find the subject by ID

//       if (existingSubject) {
//         Object.assign(existingSubject, updatedData); // Update the existing subject with new data
//       }
//     },
//   },
// });

// // Extract generated action creators and reducer function from the subjectSlice
// export const { addSubject, removeSubject, updateSubject } = subjectSlice.actions;
// export default subjectSlice.reducer;
