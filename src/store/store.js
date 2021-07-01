import { combineReducers, createStore } from "redux"

const commonReducer = combineReducers({

})

export const store = createStore(commonReducer)

window.__store__ = store