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

import { deleteProduct } from "./products.thunk";
import { getProducts } from "shared/components/shop/shop.thunk";
import {
    productsSelector,
    loaderSelector,
} from "shared/components/shop/shop.slice";
import { getSingleProduct } from "shared/components/product/product.thunk";
import ProductsForm from "./products.form";
import ProductsView from "./products.view";

export default function Categories() {
    const match = useRouteMatch();
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const products = useSelector(productsSelector);
    const loader = useSelector(loaderSelector);

    const createURL = `${match.url}/create`;
    const updateURL = `${match.url}/update`;

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch, location]);

    const productHandler = async (id = null) => {
        if (id) {
            await dispatch(getSingleProduct(id));
            history.push(`${updateURL}/${id}`);
        } else {
            history.push(createURL);
        }
    };

    const productDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    return (
        <Switch>
            <Route exact path={createURL}>
                <ProductsForm action="create" />
            </Route>
            <Route exact path={`${updateURL}/:id`}>
                <ProductsForm action="update" />
            </Route>
            <Route exact path={match.url}>
                <ProductsView
                    productHandler={productHandler}
                    products={products}
                    loader={loader}
                    productDelete={productDelete}
                />
            </Route>
            <Redirect exact from="*" to="/404" />
        </Switch>
    );
}
