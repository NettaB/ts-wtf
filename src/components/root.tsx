import { Provider } from "react-redux";
import { Store } from 'redux';
import { App } from "./app.component";
import React from "react";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const Root = (props: { store: Store }) => {
    const { store, ...moreProps} = props;
    return (
        <Provider store={ store }>
            <Router history={ history }>
                <App { ...moreProps }/>
            </Router>
        </Provider>
    );
};