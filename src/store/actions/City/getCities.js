import { useMutation, useQuery } from "@apollo/react-hooks";
import { getCities } from "../../../graphql/queries/cities";

export const GET_CITIES_REQUEST = "GET_CITIES_REQUEST";
export const GET_CITIES_SUCCESS = "GET_CITIES_SUCCESS";
export const GET_CITIES__FAIL = "GET_CITIES__FAIL";

export const storeGetCities = (code) => async (dispatch) => {
  dispatch({ type: GET_CITIES_REQUEST });
  try {
    const { loading, error, data, onCompleted } = useQuery(getCities, {
        onCompleted: (data) => {
            dispatch({ type: GET_CITIES_SUCCESS, payload: data.data[0] });
          },
    });
  } catch (error) {
    dispatch({ type: GET_CITIES__FAIL, payload: error });
  }
};
