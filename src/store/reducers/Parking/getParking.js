import { GET_PARKING_REQUEST, GET_PARKING_SUCCESS, GET_PARKING__FAIL } from "../../actions/Parking/getParking";

const initialState = {
  parking: {},
};

export default (state = { initialState, loading: true }, action) => {
  switch (action.type) {
    case GET_PARKING_REQUEST:
      return { loading: true };
    case GET_PARKING_SUCCESS:
      return { ...state, parking: action.payload, loading: false };
    case GET_PARKING__FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
