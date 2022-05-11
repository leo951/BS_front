import { useMutation, useQuery } from "@apollo/react-hooks";
import { getFloor } from "../../../graphql/queries/floors";

export const GET_FLOOR_REQUEST = "GET_FLOOR_REQUEST";
export const GET_FLOOR_SUCCESS = "GET_FLOOR_SUCCESS";
export const GET_FLOOR__FAIL = "GET_FLOOR__FAIL";

export const storeGetFloor = (code) => async (dispatch) => {
  dispatch({ type: GET_FLOOR_REQUEST });
  try {
    const { loading, error, data, onCompleted } = useQuery(getFloor, {
      variables: { id: code.id },
      onCompleted: (data) => {
        dispatch({ type: GET_FLOOR_SUCCESS, payload: data.data[0] });
      },
    });
  } catch (error) {
    dispatch({ type: GET_FLOOR__FAIL, payload: error });
  }
};
