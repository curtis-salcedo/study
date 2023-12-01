// // reducers/userReducer.js
// import React from 'react'

// // Initial state for the user slice of the state
// const initialState = {
//   user: null, // Placeholder for user data
//   isLoggedIn: false, // Placeholder for user login status
// };

// // Define action handlers as an object outside of the reducer function
// const actionHandlers = {
//   // Handler function for setting user information when logged in
//   USER_LOGIN: (state, action) => ({
//     ...state,
//     user: action.payload,
//     isLoggedIn: true,
//   }),

//   // Handler function for logging the user out
//   USER_LOGOUT: (state) => ({
//     ...state,
//     user: null,
//     isLoggedIn: false,
//   }),

//   // You can define other action types and their corresponding handler functions here
//   // Example:
//   // UPDATE_USER_INFO: () => { /* ... */ },
// };

// // Export the userReducer function
// export default function userReducer(state = initialState, action) {
//   // Find the corresponding handler function based on the action type
//   const handler = actionHandlers[action.type];

//   // If a handler function exists for the dispatched action type, call it to update the state
//   // Otherwise, return the current state unchanged
//   return handler ? handler(state, action) : state;
// }
