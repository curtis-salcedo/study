import React from 'react';
import { combineReducers } from 'redux';

// Reducer imports
import activeReducer from './activeReducer';
import subjectsReducer from '../features/subjects/subjectsReducer';
import categoriesReducer from '../features/Category/categoriesReducer';

const initialState = {
  user: {name: 'Curtis', email: 'curtis@curtis.com'},
};

const rootReducer = combineReducers({
  user: initialState.user || {},
  activeData: activeReducer,
  subjects: subjectsReducer,
  categories: categoriesReducer,
  // Add other reducers here
});

export default rootReducer;