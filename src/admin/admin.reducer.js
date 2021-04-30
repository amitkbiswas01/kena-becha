import { usersReducer } from "./components/users/users.slice";
import { categoriesReducer } from "./components/categories/categories.slice";

export const adminReducer = {
    usersReducer: usersReducer,
    categoriesReducer: categoriesReducer,
};
