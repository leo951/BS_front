import { GET_SPOT_REQUEST, GET_SPOT_SUCCESS, GET_SPOT__FAIL } from "../../actions/Spot/getSpot";

const initialState = {
  spot: {},
};

export default (state = { initialState, loading: true }, action) => {
  switch (action.type) {
    case GET_SPOT_REQUEST:
      return { loading: true };
    case GET_SPOT_SUCCESS:
      return { ...state, spot: action.payload, loading: false };
    case GET_SPOT__FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
