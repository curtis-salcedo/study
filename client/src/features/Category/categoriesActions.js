import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as types from '../../actions/types';

const rootUrl = 'http://localhost:8000/api';

// Action creator for fetching subjects
export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      // Call GET API function
      const response = await axios.get(`${rootUrl}/categories/`); 
      // Dispatch action when response data is received
      dispatch({
        type: types.FETCH_CATEGORIES,
        payload: response.data // Assuming the response contains an array of subjects
      });
    } catch (error) {
      // Handle error if API call fails
      console.error('Error fetching categories:', error);
      // Optionally dispatch an error action
      // dispatch({ type: types.FETCH_SUBJECTS_ERROR, payload: error });
    }
  };
}

// Action creator to add a new category
export const addCategories = (newCategory) => {
  console.log('newCategory created at categoryActions =>', newCategory)
  return async (dispatch) => {
    try {
      const response = await axios.post(`${rootUrl}/categories/`, newCategory); 
      dispatch({
        type: types.ADD_CATEGORY,
        payload: response.data
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
      // Optionally dispatch an error action
      // dispatch({ type: types.FETCH_SUBJECTS_ERROR, payload: error });
    }
  };
};

// Action creator to set the active category
export const setActiveCategory = (category) => {
  return {
    type: types.SET_ACTIVE_CATEGORY,
    payload: category
  };
};
