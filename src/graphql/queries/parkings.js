import gql from "graphql-tag";

export const getParkings = gql`
  query {
    getParkings {
      id
      name
      floors {
        id
        letter
      }
    }
  }
`;

export const getParking = gql`
  query getParking($id: ID) {
    getParking(id: $id) {
      id
      name
      floors {
        id
        letter
      }
    }
  }
`;
