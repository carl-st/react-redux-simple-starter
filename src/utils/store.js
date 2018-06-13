import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import reducers from './reducers';

const history = createHistory();
const middleware = [thunk, routerMiddleware(...history)];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export { store, history };
