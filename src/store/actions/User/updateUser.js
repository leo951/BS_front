import authService from "../../../services/auth.service";

export const UPDATE_USER_SPOT_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SPOT_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_SPOT_FAIL = "UPDATE_USER_FAIL";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const updateSpotUser = (code) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_SPOT_REQUEST });
  try {
    authService
    .updateUser(code.token, { spot: code.spotId })
    .then((data) => {
        dispatch({ type: UPDATE_USER_SPOT_SUCCESS, payload: data.data[0] });
    })
  } catch (error) {
    dispatch({ type: UPDATE_USER_SPOT_FAIL, payload: error });
  }
};

export const updateUser = (code, user) => async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    try {
        authService
        .updateUser(code, JSON.parse(JSON.stringify(user)))
        .then((data) => {
          dispatch({ type: UPDATE_USER_SUCCESS, payload: data.user });
        })
    } catch (error) {
      dispatch({ type: UPDATE_USER_FAIL, payload: error });
    }
  };
