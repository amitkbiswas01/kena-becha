import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Redirect,
    Route,
    Switch,
    useHistory,
    useRouteMatch,
    useLocation,
} from "react-router-dom";

import {
    deleteCategory,
    getAllCategories,
    getSingleCategory,
} from "./categories.thunk";
import { loaderSelector, categoriesSelector } from "./categories.slice";
import CategoriesForm from "./categories.form";
import CategoriesView from "./categories.view";

export default function Categories() {
    const match = useRouteMatch();
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const categories = useSelector(categoriesSelector);
    const loader = useSelector(loaderSelector);

    const createURL = `${match.url}/create`;
    const updateURL = `${match.url}/update`;

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch, location]);

    const categoryHandler = async (id = null) => {
        if (id) {
            await dispatch(getSingleCategory(id));
            history.push(`${updateURL}/${id}`);
        } else {
            history.push(createURL);
        }
    };

    const categoryDelete = (id) => {
        dispatch(deleteCategory(id));
    };

    return (
        <Switch>
            <Route exact path={createURL}>
                <CategoriesForm action="create" />
            </Route>
            <Route exact path={`${updateURL}/:id`}>
                <CategoriesForm action="update" />
            </Route>
            <Route exact path={match.url}>
                <CategoriesView
                    categoryHandler={categoryHandler}
                    categories={categories}
                    loader={loader}
                    categoryDelete={categoryDelete}
                />
            </Route>
            <Redirect exact from="*" to="/404" />
        </Switch>
    );
}
