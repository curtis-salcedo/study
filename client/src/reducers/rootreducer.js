// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import subjectReducer from './subjectSlice'; // Import your subject slice reducer

const rootReducer = combineReducers({
  subjects: subjectReducer,
  // Add other reducers here if you have more slice reducers
});

export default rootReducer;
