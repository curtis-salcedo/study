import React from 'react';
import { combineReducers } from 'redux';

// Reducer imports
import subjectsReducer from '../features/subjects/subjectsReducer';
import categoriesReducer from '../features/Category/categoriesReducer';
import topicsReducer from '../features/topics/topicsReducer';

const storedActiveData = {
  activeSubject: JSON.parse(localStorage.getItem('activeSubject')),
  activeTopic: JSON.parse(localStorage.getItem('activeTopic')),
  activeCategory: JSON.parse(localStorage.getItem('activeCategory')),
};

const activeReducer = (state = storedActiveData || {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_SUBJECT':
      localStorage.setItem('activeSubject', JSON.stringify(action.payload.subject));
      return { ...state, activeSubject: action.payload.subject };
    case 'SET_ACTIVE_TOPIC':
      localStorage.setItem('activeTopic', JSON.stringify(action.payload.topic));
      return { ...state, activeTopic: action.payload.topic };
    case 'SET_ACTIVE_CATEGORY':
      localStorage.setItem('activeCategory', JSON.stringify(action.payload.category));
      return { ...state, activeCategory: action.payload.category };
    default:
      return state;
  }
};

export default activeReducer;