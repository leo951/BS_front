import { UPDATE_SPOT_REQUEST, UPDATE_SPOT_SUCCESS, UPDATE_SPOT__FAIL } from "../../actions/Spot/updateSpot";

const initialState = {
  spot: {},
};

export default (state = { initialState, loading: true }, action) => {
  switch (action.type) {
    case UPDATE_SPOT_REQUEST:
      return { loading: true };
    case UPDATE_SPOT_SUCCESS:
      return { ...state, spot: action.payload, loading: false };
    case UPDATE_SPOT__FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
