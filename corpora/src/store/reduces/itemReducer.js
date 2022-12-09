import { FETCH_ITEMS } from "../actions/actionTypes";

const initialState = {
  items: [],
  oneItem: {},
};

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
}
export default itemReducer;
