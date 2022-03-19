import { createStore,combineReducers,applyMiddleware } from "redux";
import {composeWithDevTools } from "redux-devtools-extension"
import {loginuser} from "./reducers/authreducer"
import thunk from "redux-thunk"
let reducer = combineReducers({
    // auth:authreducer,
    login:loginuser
})
let devtools = composeWithDevTools

let store = createStore(
    reducer,
    devtools(applyMiddleware(thunk))
)

export default store