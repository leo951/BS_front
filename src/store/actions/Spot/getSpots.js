import { useMutation, useQuery } from "@apollo/react-hooks";
import {getSpots} from "../../../graphql/queries/spots"

export const GET_SPOTS_REQUEST = "GET_SPOTS_REQUEST";
export const GET_SPOTS_SUCCESS = "GET_SPOTS_SUCCESS";
export const GET_SPOTS__FAIL = "GET_SPOTS__FAIL";

export const storeGetSpots = (code) => async (dispatch) => {
  dispatch({ type: GET_SPOTS_REQUEST });
  try {
    const { loading, error, data, onCompleted } = useQuery(getSpots, {
        onCompleted: (data) => {
            dispatch({ type: GET_SPOTS_SUCCESS, payload: data.data[0] });
          },
    });
  } catch (error) {
    dispatch({ type: GET_SPOTS__FAIL, payload: error });
  }
};
