import React from 'react';
import { combineReducers } from 'redux';

// Reducer imports
import subjectsReducer from '../features/Subject/subjectsReducer';
import categoriesReducer from '../features/Category/categoriesReducer';

const initialState = {
  user: {name: 'Curtis', email: 'curtis@curtis.com'},
};

const rootReducer = combineReducers({
  user: initialState.user || {},
  subjects: subjectsReducer || [],
  activeSubject: (state = {}, action) => {
    switch (action.type) {
      case 'SET_ACTIVE_SUBJECT':
        return action.payload.subject;
      default:
        return state;
    }
  },
  categories: categoriesReducer,
  // Add other reducers here
});

export default rootReducer;