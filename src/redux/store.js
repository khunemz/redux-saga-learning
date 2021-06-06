import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers/index.js'
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/index'

const initialState = {};

// const middleware = [thunk];
const middleware = createSagaMiddleware();
const store = createStore(rootReducer , initialState , compose(
  applyMiddleware(
    middleware
    ), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

middleware.run(rootSaga);
export default store;