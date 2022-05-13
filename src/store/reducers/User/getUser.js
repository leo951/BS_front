import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER__FAIL } from "../../actions/User/getUser";

const initialState = {
  user: {},
};

export default (state = { initialState, loading: true }, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { loading: true };
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case GET_USER__FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
