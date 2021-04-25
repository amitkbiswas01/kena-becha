import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { sharedReducer } from "shared/shared.reducer";
import { clientReducer } from "client/client.reducer";

const rootReducer = combineReducers({ ...sharedReducer, ...clientReducer });

export default configureStore({
    reducer: rootReducer,
});
