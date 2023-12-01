import * as types from '../actions/types';

import { fetchSubjects } from '../actions/subjectActions';

const subjectsReducer = (state = [], action) => {
  switch (action.type) {
    // This will be called when an action of type FETCH_SUBJECTS is dispatched
    case types.FETCH_SUBJECTS:
      return action.payload;
    case types.ADD_SUBJECT:
      return [...state, action.payload];
    case types.DELETE_SUBJECT:
      return state.filter((subject) => subject.id !== action.payload.id);
    case types.UPDATE_SUBJECT:
      return state.map((subject) =>
        subject.id === action.payload.id ? action.payload : subject
      );
    case types.ACTIVE_SUBJECT:
      return state.map((subject) =>
        subject.id === action.payload.id ? action.payload : subject
      );
    default:
      return state;
  }
};

export default subjectsReducer;