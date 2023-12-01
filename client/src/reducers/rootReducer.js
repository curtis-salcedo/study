import React from 'react';
import { combineReducers } from 'redux';

// Reducer imports
import subjectsReducer from './subjectsReducer';
import categoriesReducer from './categoriesReducer';
// import userReducer from './userReducer';

const initialState = {
  user: {name: 'Curtis', email: 'curtis@curtis.com'},
};

const rootReducer = combineReducers({
  user: initialState.user,
  subjects: subjectsReducer,
  // categories: categoriesReducer,
  // Add other reducers here
});

export default rootReducer;