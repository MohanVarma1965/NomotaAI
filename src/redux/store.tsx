// Importing required functions and utilities from redux toolkit
import { configureStore } from "@reduxjs/toolkit";
// Import the reducer from the slice

// Configure the Redux store and combine all reducers
// Currently, only the products reducer is added
export const store = configureStore({
  reducer: {},
});

// Define RootState type based on the store's state
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type based on the store's dispatch function
export type AppDispatch = typeof store.dispatch;
