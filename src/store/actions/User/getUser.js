import authService from "../../../services/auth.service";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER__FAIL";

export const getOneUser = (code) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    authService.getUser(code).then((data) => {
      dispatch({ type: GET_USER_SUCCESS, payload: data });
    });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error });
  }
};
