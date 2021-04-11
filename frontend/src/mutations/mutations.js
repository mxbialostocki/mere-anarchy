import { gql } from "@apollo/client"

export const CREATE_RECORD_MUTATION = gql`
mutation CreateRecord($title: String!, $author: String!){
    createRecord(title: $title, author: $author){
        id
        title
        author 
    }
}
`