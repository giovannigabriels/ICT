import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import dataReducer from "./reduces/itemReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
