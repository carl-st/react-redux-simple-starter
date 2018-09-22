import { combineReducers } from 'redux';
import { actionTypes } from './actions';
import { routerReducer } from 'react-router-redux';

const initialState = Object.assign({}, {
    isLoading: false
});

const main = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.loading
            };
        default:
            return state;
    }
};

export default combineReducers({
    main: main,
    routing: routerReducer
});

export {
    main
};