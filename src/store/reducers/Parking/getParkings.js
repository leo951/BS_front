import { GET_PARKINGS_REQUEST, GET_PARKINGS_SUCCESS, GET_PARKINGS__FAIL } from "../../actions/Parking/getParkings";

const initialState = {
  parkings: {},
};

export default (state = { initialState, loading: true }, action) => {
  switch (action.type) {
    case GET_PARKINGS_REQUEST:
      return { loading: true };
    case GET_PARKINGS_SUCCESS:
      return { ...state, parkings: action.payload, loading: false };
    case GET_PARKINGS__FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
