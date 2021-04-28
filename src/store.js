import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { sharedReducer } from "shared/shared.reducer";
import { clientReducer } from "client/client.reducer";
import { adminReducer } from "admin/admin.reducer";

const rootReducer = combineReducers({
    ...sharedReducer,
    ...clientReducer,
    ...adminReducer,
});

export default configureStore({
    reducer: rootReducer,
});
