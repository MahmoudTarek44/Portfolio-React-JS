import { createStore, combineReducers } from "redux";
import { todoReducer, counterReducer } from "./reducers";

export const rootReducer = combineReducers({
	Todo: todoReducer,
	Count: counterReducer,
});
export const store = createStore(rootReducer);
