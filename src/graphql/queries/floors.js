import gql from "graphql-tag";

export const getFloors = gql`
  query {
    getFloors {
      id
      letter
      spots {
        id
        number
        available
      }
    }
  }
`;

export const getFloor = gql`
  query getFloor($id: ID) {
    getFloor(id: $id) {
        id
        letter
        spots {
          id
          number
          available
        }
    }
  }
`;
