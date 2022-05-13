import {
  UPDATE_USER_SPOT_SUCCESS,
  UPDATE_USER_SPOT_REQUEST,
  UPDATE_USER_SPOT_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_FAIL,
} from "../../actions/User/updateUser";

const initialState = {
  user: {},
};

export default (state = { initialState, loading: true }, action) => {
  switch (action.type) {
    case UPDATE_USER_SPOT_REQUEST:
      return { loading: true };
    case UPDATE_USER_SPOT_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case UPDATE_USER_SPOT_FAIL:
      return { loading: false, error: action.payload };

    case UPDATE_USER_REQUEST:
      return { loading: true };
    case UPDATE_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case UPDATE_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
