import * as types from '../../actions/types';

const categoriesReducer = (state = [], action) => {
  // console.log("This is the state sent to categories reducer =>", state)
  // console.log("This is the action sent to categories reducer =>", action)
  // console.log("This is the action.payload of action sent to categories reducer =>", action.payload)
  switch (action.type) {
    // This will be called when an action of type FETCH_SUBJECTS is dispatched
    case types.FETCH_CATEGORIES:
      return action.payload;
    case types.ADD_CATEGORY:
      return [...state, action.payload];
    case types.DELETE_CATEGORY:
      return state.filter((category) => category.id !== action.payload.id);
    case types.UPDATE_CATEGORY:
      return state.map((category) =>
        category.id === action.payload.id ? action.payload : category
      );
    case types.ACTIVE_CATEGORY:
      return {
        activeCategory: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;