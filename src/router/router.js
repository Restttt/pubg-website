import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Home from '../components/Home/Home';
import Login from '../components/Authentication/Login';
import Register from '../components/Authentication/Register';
import Search from '../components/Search/Search';

export default (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/search" component={Search} />
        </Switch>
    </HashRouter>
)