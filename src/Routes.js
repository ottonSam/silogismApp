import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Notes from './components/Notes'
import Reduce from './components/Reduce'
import Silogism from './components/Silogism'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() =><Home />}/>
            <Route exact path="/notes" component={() =><Notes />}/>
            <Route exact path="/silogism" component={() =><Silogism />}/>
            <Route exact path="/reduce" component={() =><Reduce />}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;
