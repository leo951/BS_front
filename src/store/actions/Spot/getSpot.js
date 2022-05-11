import { useMutation, useQuery } from "@apollo/react-hooks";
import { getSpot } from "../../../graphql/queries/spots";

export const GET_SPOT_REQUEST = "GET_SPOT_REQUEST";
export const GET_SPOT_SUCCESS = "GET_SPOT_SUCCESS";
export const GET_SPOT__FAIL = "GET_SPOT__FAIL";

export const storeGetSpot = (code) => async (dispatch) => {
  dispatch({ type: GET_SPOT_REQUEST });
  try {
    const { loading, error, data, onCompleted } = useQuery(getSpot, {
      variables: { id: code.id },
      onCompleted: (data) => {
        dispatch({ type: GET_SPOT_SUCCESS, payload: data.data[0] });
      },
    });
  } catch (error) {
    dispatch({ type: GET_SPOT__FAIL, payload: error });
  }
};
