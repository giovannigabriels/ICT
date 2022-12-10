import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import itemReducer from "./reduces/itemReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  itemReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
