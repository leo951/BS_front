import { useMutation, useQuery } from "@apollo/react-hooks";
import { getCity } from "../../../graphql/queries/cities";

export const GET_CITY_REQUEST = "GET_CITY_REQUEST";
export const GET_CITY_SUCCESS = "GET_CITY_SUCCESS";
export const GET_CITY__FAIL = "GET_CITY__FAIL";

export const storeGetCity = (code) => async (dispatch) => {
  dispatch({ type: GET_CITY_REQUEST });
  try {
    const { loading, error, data, onCompleted } = useQuery(getCity, {
      variables: { id: code.id },
      onCompleted: (data) => {
        dispatch({ type: GET_CITY_SUCCESS, payload: data.data[0] });
      },
    });
  } catch (error) {
    dispatch({ type: GET_CITY__FAIL, payload: error });
  }
};
