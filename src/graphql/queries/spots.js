import gql from "graphql-tag";

export const getSpots = gql`
  query {
    getSpots {
      id
      number
      available
    }
  }
`;

export const getSpot = gql`
  query getSpot($id: ID) {
    getSpot(id: $id) {
      id
      number
      available
    }
  }
`;
