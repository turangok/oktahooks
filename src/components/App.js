import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Buttons from './pages/Buttons';
import Staff from '../components/pages/Staff';
import PostsAndTodos from './pages/PostsAndTodos';
import '../App.css';

const config = {
    issuer: 'https://dev-846165.okta.com/oauth2/default',
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: '0oa3505xfVg207CG24x6',
    pkce: true
}

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Router>
                        <Security {...config}>
                            <Navbar />
                            <Route path='/' exact={true} component={Buttons} />
                            <Route path='/' exact={true} component={PostsAndTodos} />
                            <SecureRoute path='/staff' exact={true} component={Staff} />
                            <Route path='/implicit/callback' component={ImplicitCallback} />
                        </Security>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
