import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const rootUrl = 'http://localhost:8000/api';

export const fetchSubjectsAsync = createAsyncThunk(
  'subjects/fetchSubjectsAsync',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${rootUrl}/subjects/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

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