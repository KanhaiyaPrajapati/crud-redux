import { combineReducers } from "redux";
import { CountReducer } from "./CounterReducer";
import { ApiReduxCrud } from "./apiReducer";
import { ReduxCrudReducer } from "./ReduxCrudREducer";

export const rootReducer = combineReducers({
    count : CountReducer,
    api:ApiReduxCrud,
    data:ReduxCrudReducer
})