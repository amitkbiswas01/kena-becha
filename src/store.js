import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { sharedReducer } from "shared/sharedReducer";

const rootReducer = combineReducers({ ...sharedReducer });

export default configureStore({
    reducer: rootReducer,
});
