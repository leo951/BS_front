import { GET_CITY_REQUEST, GET_CITY_SUCCESS, GET_CITY__FAIL } from "../../actions/City/getCity";

const initialState = {
  city: {},
};

export default (state = { initialState, loading: true }, action) => {
  switch (action.type) {
    case GET_CITY_REQUEST:
      return { loading: true };
    case GET_CITY_SUCCESS:
      return { ...state, city: action.payload, loading: false };
    case GET_CITY__FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
