import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { sharedReducer } from "shared/shared.reducer";

const rootReducer = combineReducers({ ...sharedReducer });

export default configureStore({
    reducer: rootReducer,
});
