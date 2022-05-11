import { useMutation, useQuery } from "@apollo/react-hooks";
import {getParkings} from "../../../graphql/queries/parkings"

export const GET_PARKINGS_REQUEST = "GET_PARKINGS_REQUEST";
export const GET_PARKINGS_SUCCESS = "GET_PARKINGS_SUCCESS";
export const GET_PARKINGS__FAIL = "GET_PARKINGS__FAIL";

export const storeGetParkings = (code) => async (dispatch) => {
  dispatch({ type: GET_PARKINGS_REQUEST });
  try {
    const { loading, error, data, onCompleted } = useQuery(getFloors, {
        onCompleted: (data) => {
            dispatch({ type: GET_PARKINGS_SUCCESS, payload: data.data[0] });
          },
    });
  } catch (error) {
    dispatch({ type: GET_PARKINGS__FAIL, payload: error });
  }
};
