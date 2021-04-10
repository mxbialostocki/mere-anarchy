import gql from "graphql-tag"

export const RECORD_MUTATION = gql`
mutation record($title:String!){
    record(title:$title){
        id, title, author, created_at 
    }

`