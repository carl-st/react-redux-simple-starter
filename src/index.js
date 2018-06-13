import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { FirstContainer } from './scenes/First/';
import { SecondContainer } from './scenes/Second/';
import { NotFoundContainer } from './scenes/NotFound';
import { paths } from './constants/';
import { store, history } from './utils/store';

class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Fragment>
                        <Switch>
                            <Route 
                                component={FirstContainer}
                                exact
                                path={paths.FIRST_CONTAINER}
                            />
                            <Route 
                                component={SecondContainer}
                                path={paths.SECOND_CONTAINER}
                            />
                            <Redirect from={paths.APP} to={paths.FIRST_CONTAINER} />
                            <Route component={NotFoundContainer} />
                        </Switch>
                    </Fragment>
                </ConnectedRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));