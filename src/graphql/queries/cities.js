import gql from "graphql-tag";

export const getCities = gql`
  query {
    getCities {
      id
      name
      img
      parkings {
        id
        name
      }
    }
  }
`;

export const getCity = gql`
  query getCity($id: ID) {
    getCity(id: $id) {
      id
      name
      img
      parkings {
        id
        name
      }
    }
  }
`;
