import { gql } from "@apollo/react-hooks"

export const updateSpot = gql`
    mutation updateSpot($id:ID, $number:String, $available:Boolean){
        updateSpot(id: $id, number:$number, available:$available){
            id,
            number,
            available
        }
    }
`