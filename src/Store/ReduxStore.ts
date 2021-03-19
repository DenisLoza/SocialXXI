import { createStore, combineReducers } from "redux"
import {profileReducer} from "./profileReducer"


let reducers = combineReducers({
  postData: profileReducer
})


let store = createStore(reducers)

export default store