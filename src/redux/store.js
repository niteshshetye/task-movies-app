import {createStore, applyMiddleware, compose} from 'redux'

// reducer
import rootReducer from './reducers'

// saga
import rootSaga from '../saga';

import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware(rootSaga);

export const store = createStore(rootReducer, compose(applyMiddleware(saga), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

saga.run(rootSaga)