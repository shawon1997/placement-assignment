import {createStore,applyMiddleware, combineReducers} from "redux"
import {Showdata} from "./Search/reducer"
import thunk from 'redux-thunk'
import { modalreducer } from "./Modal/reducer"
const rootReducer=combineReducers({
    data:Showdata,
    modal:modalreducer
})
export const store=createStore(rootReducer,applyMiddleware(thunk))
