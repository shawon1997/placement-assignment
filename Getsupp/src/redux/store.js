import {createStore,applyMiddleware} from "redux"
import {Showdata} from "./Search/reducer"
import thunk from 'redux-thunk'
export const store=createStore(Showdata,applyMiddleware(thunk))
