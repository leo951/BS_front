import { GET_FLOORS_REQUEST, GET_FLOORS_SUCCESS, GET_FLOORS__FAIL } from "../../actions/Floor/getFloors";

const initialState = {
  floors: {},
};

export default (state = { initialState, loading: true }, action) => {
  switch (action.type) {
    case GET_FLOORS_REQUEST:
      return { loading: true };
    case GET_FLOORS_SUCCESS:
      return { ...state, floors: action.payload, loading: false };
    case GET_FLOORS__FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
