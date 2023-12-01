import * as types from '../actions/types';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
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
      return state.map((category) =>
        category.id === action.payload.id ? action.payload : category
      );
    default:
      return state;
  }
};

export default categoriesReducer;