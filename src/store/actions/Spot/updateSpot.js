import { useMutation, useQuery } from "@apollo/react-hooks";
import { updateSpot } from "../../../graphql/mutations/spots";

export const UPDATE_SPOT_REQUEST = "UPDATE_SPOT_REQUEST";
export const UPDATE_SPOT_SUCCESS = "UPDATE_SPOT_SUCCESS";
export const UPDATE_SPOT__FAIL = "UPDATE_SPOT__FAIL";

export const storeUpdateSpot = (code) => async (dispatch) => {
  const [isUpdate] = useMutation(updateSpot);
  dispatch({ type: UPDATE_SPOT_REQUEST });
  try {
    isUpdate({
      variables: {
        id: code.id,
        number: code.spot.number,
        available: code.spot.available,
      },
      onCompleted: (data) => {
        dispatch({ type: UPDATE_SPOT_SUCCESS, payload: data.data[0] });
      },
    });
  } catch (error) {
    dispatch({ type: UPDATE_SPOT__FAIL, payload: error });
  }
};
