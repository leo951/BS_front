import { GET_CITIES_REQUEST, GET_CITIES_SUCCESS, GET_CITIES__FAIL } from "../../actions/City/getCities";

const initialState = {
  cities: {},
};

export default (state = { initialState, loading: true }, action) => {
  switch (action.type) {
    case GET_CITIES_REQUEST:
      return { loading: true };
    case GET_CITIES_SUCCESS:
      return { ...state, cities: action.payload, loading: false };
    case GET_CITIES__FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
