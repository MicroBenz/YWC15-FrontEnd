import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import promiseMiddleware from './middlewares/promise.middleware';
import reducers from './reducers/index';

let middlewares;

if (global.window && global.window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV !== 'production') {
  middlewares = compose(
    applyMiddleware(promiseMiddleware),
    applyMiddleware(thunk),
    global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  middlewares = compose(
    applyMiddleware(promiseMiddleware),
    applyMiddleware(thunk),
  );
}
export default initialState =>
  createStore(
    reducers,
    initialState,
    middlewares
  );
