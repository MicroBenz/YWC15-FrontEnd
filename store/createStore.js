import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

let middlewares;

if (global.window && global.window.__REDUX_DEVTOOLS_EXTENSION__ ) {
  middlewares = compose(
    applyMiddleware(thunk),
    global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  middlewares = compose(
    applyMiddleware(thunk)
  );
}
export default initialState =>
  createStore(
    reducers,
    initialState,
    middlewares
  );
