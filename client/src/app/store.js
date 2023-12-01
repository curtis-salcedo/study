import { configureStore } from '@reduxjs/toolkit';
import subjectReducer from '../reducers/subjectReducer';
import { fetchSubjectsAsync } from '../actions/subjectActions'; // Assuming your action is in this location

// Create the Redux store with the specified reducer
const store = configureStore({
  reducer: {
    subjects: subjectReducer,
    // Other reducers below
  },
});

// Dispatch the fetchSubjectsAsync thunk action after the store is created
store.dispatch(fetchSubjectsAsync());

console.log(store.getState());
console.log(store.dispatch(fetchSubjectsAsync()));

export default store;
