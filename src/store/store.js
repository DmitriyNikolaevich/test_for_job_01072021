import { combineReducers, createStore, applyMiddleware } from "redux"
import mainPageReducer, { mainPageSAGA } from "./mainPageReducer"
import createSagaMiddleware from 'redux-saga'

const commonReducer = combineReducers({
    mainPage: mainPageReducer
})

export const sagaMiddleware = createSagaMiddleware()

export const store = createStore(commonReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mainPageSAGA)

window.__store__ = store