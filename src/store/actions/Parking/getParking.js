import { useMutation, useQuery } from "@apollo/react-hooks";
import { getParking } from "../../../graphql/queries/parkings";

export const GET_PARKING_REQUEST = "GET_PARKING_REQUEST";
export const GET_PARKING_SUCCESS = "GET_PARKING_SUCCESS";
export const GET_PARKING__FAIL = "GET_PARKING__FAIL";

export const storeGetParking = (code) => async (dispatch) => {
  dispatch({ type: GET_PARKING_REQUEST });
  try {
    const { loading, error, data, onCompleted } = useQuery(getParking, {
      variables: { id: code.id },
      onCompleted: (data) => {
        dispatch({ type: GET_PARKING_SUCCESS, payload: data.data[0] });
      },
    });
  } catch (error) {
    dispatch({ type: GET_PARKING__FAIL, payload: error });
  }
};
