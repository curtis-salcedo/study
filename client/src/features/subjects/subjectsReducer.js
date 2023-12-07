import * as types from '../../actions/types';

const subjectsReducer = (state = [], action) => {
  // console.log("This is the state sent to subjects reducer =>", state)
  // console.log("This is the action sent to subjects reducer =>", action)
  // console.log("This is the action.payload of action sent to subjects reducer =>", action.payload)
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
    // case types.ACTIVE_SUBJECT:
    //   return {
    //     activeSubject: action.payload,
    //   };
    case types.SET_ACTIVE_SUBJECT:
      return {
        ...state,
        activeSubject: action.payload,
      };
    default:
      return state;
  }
};

export default subjectsReducer;