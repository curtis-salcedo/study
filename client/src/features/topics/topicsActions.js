import axios from 'axios';
import * as types from '../../actions/types';

const rootUrl = 'http://localhost:8000/api';

// Action creator for fetching topics
export const fetchTopics = () => {
  return async (dispatch) => {
    try {
      // Call GET API function
      const response = await axios.get(`${rootUrl}/topics/`); 
      // Dispatch action when response data is received
      console.log('topics fetchData response.data =>', response.data)
      dispatch({
        type: types.FETCH_TOPICS,
        payload: response.data // Assuming the response contains an array of subjects
      });
    } catch (error) {
      // Handle error if API call fails
      console.error('Error fetching topics:', error);
      // Optionally dispatch an error action
      // dispatch({ type: types.FETCH_SUBJECTS_ERROR, payload: error });
    }
  };
};

// Action creator to add a new topic
export const addTopics = (newTopic) => {
  console.log('newTopic created at topicActions =>', newTopic)
  return async (dispatch) => {
    try {
      console.log('newTopic created at topicActions =>', newTopic)
      const response = await axios.post(`${rootUrl}/topics/`, newTopic); 
      dispatch({
        type: types.ADD_TOPIC,
        payload: response.data
      });
    } catch (error) {
      console.error('Error fetching topics:', error);
      // Optionally dispatch an error action
      // dispatch({ type: types.FETCH_SUBJECTS_ERROR, payload: error });
    }
  };
};