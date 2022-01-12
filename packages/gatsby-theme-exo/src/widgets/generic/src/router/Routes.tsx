import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import NotFound from '../pages/NotFound';

const Contact = loadable(() => import('../pages/Contact'));
const Description = loadable(() => import('../pages/Description'));
const Eligibles = loadable(() => import('../pages/EligiblesAndSubscribers'));
const LAA = loadable(() => import('../pages/LAA'));
const Opportunity = loadable(() => import('../pages/Opportunity'));
const Timeline = loadable(() => import('../pages/Timeline'));
const AddALead = loadable(() => import('../pages/AddALead'));

const Routes = () => {
    return (
        <HashRouter hashType="slash">
            <Switch>
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/description" component={Description} />
                <Route exact path="/eligibles" component={Eligibles} />
                <Route exact path="/laa" component={LAA} />
                <Route exact path="/opportunity" component={Opportunity} />
                <Route exact path="/timeline" component={Timeline} />
                <Route exact path="/addalead" component={AddALead} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </HashRouter>
    )
}

export default Routes;