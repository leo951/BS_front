import { useMutation, useQuery } from "@apollo/react-hooks";
import {getFloors} from "../../../graphql/queries/floors"

export const GET_FLOORS_REQUEST = "GET_FLOORS_REQUEST";
export const GET_FLOORS_SUCCESS = "GET_FLOORS_SUCCESS";
export const GET_FLOORS__FAIL = "GET_FLOORS__FAIL";

export const storeGetFloors = (code) => async (dispatch) => {
  dispatch({ type: GET_FLOORS_REQUEST });
  try {
    const { loading, error, data, onCompleted } = useQuery(getFloors, {
        onCompleted: (data) => {
            dispatch({ type: GET_FLOORS_SUCCESS, payload: data.data[0] });
          },
    });
  } catch (error) {
    dispatch({ type: GET_FLOORS__FAIL, payload: error });
  }
};
