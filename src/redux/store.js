import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
// import datalist from './datalistreducers'
// import shoucang from './shoucangreducer'
// import login from './loginreducer'
// import thunk from 'redux-thunk'
let rootReducer = combineReducers({
    datalist,shoucang,login
})

function logger({ getState }) {
    return (next) => (action) => {
        let returnValue = next(action)
        return returnValue
    }
}
const thunk = ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
};

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(logger, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;