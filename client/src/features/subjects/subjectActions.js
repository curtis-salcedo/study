import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import * as types from '../../actions/types';

const rootUrl = 'http://localhost:8000/api';

// Action creator for fetching subjects
export const fetchSubjects = () => {
  return async (dispatch) => {
    try {
      // Call GET API function  
      const response = await axios.get(`${rootUrl}/subjects`); 
      // Dispatch action when response data is received
      console.log('Fetch subjects,needs categories', response.data)
      dispatch({
        type: types.FETCH_SUBJECTS,
        payload: response.data // Assuming the response contains an array of subjects
      });
    } catch (error) {
      // Handle error if API call fails
      console.error('Error fetching subjects:', error);
      // Optionally dispatch an error action
      // dispatch({ type: types.FETCH_SUBJECTS_ERROR, payload: error });
    }
  };
};

// Action creator to add a new subject
// export const addSubjectAsync = createAsyncThunk(
//   'subjects/addSubjectAsync',
//   async (newSubjectData, { rejectWithValue }) => {
//     try {
//       // Make API call to add subject
//       console.log(newSubjectData)
//       const response = await axios.post(`${rootUrl}/subjects/`, newSubjectData);
//       // Return the response data as the fulfilled action payload
//       console.log(response.data)
//       return response.data;
//     } catch (error) {
//       // Handle error case - dispatch a rejected action with error payload
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// Action creator to add a new subject
export const addSubjects = (newSubject) => {
  return async (dispatch) => {
    try {
      // Call POST API function  
      console.log('newSubject created at subjectActions =>', newSubject)
      const response = await axios.post(`${rootUrl}/subjects/`, newSubject); 
      // Dispatch action when response data is received
      dispatch({
        type: types.ADD_SUBJECT,
        payload: response.data // Assuming the response contains an array of subjects
      });
    } catch (error) {
      // Handle error if API call fails
      console.error('Error fetching subjects:', error);
      // Optionally dispatch an error action
      // dispatch({ type: types.FETCH_SUBJECTS_ERROR, payload: error });
    }
  };
};

// Action creator to delete a subject
export const deleteSubjects = (subjectId) => {
  return async (dispatch) => {
    try {
      // Call DELETE API function  
      console.log('subject deleted at subjectActions =>', subjectId)
      const response = await axios.delete(`${rootUrl}/subjects/${subjectId}`); 
      // Dispatch action when response data is received
      dispatch({
        type: types.DELETE_SUBJECT,
        payload: response.data // Assuming the response contains an array of subjects
      });
    } catch (error) {
      // Handle error if API call fails
      console.error('Error fetching subjects:', error);
      // Optionally dispatch an error action
      // dispatch({ type: types.FETCH_SUBJECTS_ERROR, payload: error });
    }
  };
};

// Action to set an active subject
export const activeSubject = (subject) => {
  console.log('subjectActions activeSubject=>', subject)
  return {
    type: types.ACTIVE_SUBJECT,
    payload: subject,
  };
};

// Action to set an active subject
export const setActiveSubject = (subject) => {
  console.log('subjectActions setActiveSubject=>', subject)
  return {
    type: types.SET_ACTIVE_SUBJECT,
    payload: subject,
  };
};
