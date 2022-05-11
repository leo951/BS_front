import { GET_SPOTS_REQUEST, GET_SPOTS_SUCCESS, GET_SPOTS__FAIL } from "../../actions/Spot/getSpots";

const initialState = {
  spots: {},
};

export default (state = { initialState, loading: true }, action) => {
  switch (action.type) {
    case GET_SPOTS_REQUEST:
      return { loading: true };
    case GET_SPOTS_SUCCESS:
      return { ...state, spots: action.payload, loading: false };
    case GET_SPOTS__FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
