import { GET_FLOOR_REQUEST, GET_FLOOR_SUCCESS, GET_FLOOR__FAIL } from "../../actions/Floor/getFloors";

const initialState = {
  floor: {},
};

export default (state = { initialState, loading: true }, action) => {
  switch (action.type) {
    case GET_FLOOR_REQUEST:
      return { loading: true };
    case GET_FLOOR_SUCCESS:
      return { ...state, floor: action.payload, loading: false };
    case GET_FLOOR__FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
