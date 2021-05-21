import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootSaga from './sagas-registration'
import rootReducer from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = composeWithDevTools({})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
