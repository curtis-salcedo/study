import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import * as types from './types';

const rootUrl = 'http://localhost:8000/api';

// export const fetchSubjectsAsync = createAsyncThunk(
//   'subjects/fetchSubjectsAsync',
//   async (thunkAPI) => {
//     try {
//       const response = await axios.get(`${rootUrl}/subjects/`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({ error: error.message });
//     }
//   }
// );

// Action creator for fetching subjects
export const fetchSubjects = () => {
  return async (dispatch) => {
    try {
      // Call GET API function  
      const response = await axios.get(`${rootUrl}/subjects`); 
      // Dispatch action when response data is received
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
export const addSubjectAsync = createAsyncThunk(
  'subjects/addSubjectAsync',
  async (newSubjectData, { rejectWithValue }) => {
    try {
      // Make API call to add subject
      console.log(newSubjectData)
      const response = await axios.post(`${rootUrl}/subjects/`, newSubjectData);

      // Return the response data as the fulfilled action payload
      console.log(response.data)
      return response.data;
    } catch (error) {
      // Handle error case - dispatch a rejected action with error payload
      return rejectWithValue(error.response.data);
    }
  }
);

export default addSubjectAsync;