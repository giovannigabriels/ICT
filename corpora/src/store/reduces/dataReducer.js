import { FETCH_DATAS } from "../actions/actionTypes";

const initialState = {
  datas: [],
  oneData: {},
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATAS:
      return { ...state, datas: action.payload };
    default:
      return state;
  }
}
export default dataReducer;
