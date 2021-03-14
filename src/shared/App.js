import './app.styl';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomeComponent from './components/home-component/index';
import TabComponent from './components/tab-component/index';

/**
 * The `App` component is the entry point for the react app.
 * It is rendered on the client as well as on the server.
 *
 * You can start developing your react app here.
 */
export default class App extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Acordesfacil</title>
                </Helmet>

                {/* <UniversalComponent name="home-component" /> */}
                <Switch>
                    <Route exact path='/' component={HomeComponent} />
                    <Route path='/:hrefArtist/:hrefSong' component={TabComponent} />
                    {/* <Route component={NotFound} /> */}
                </Switch>
                
            </div>
        );
    }
}
