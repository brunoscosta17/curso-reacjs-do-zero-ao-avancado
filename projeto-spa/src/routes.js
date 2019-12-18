import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Header from './components/Header';

import Home from './components/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="" component={} />
                <Route path="" component={} /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;