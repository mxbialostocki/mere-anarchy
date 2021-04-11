//import our graph query parser
import { gql } from "@apollo/client"

// our first query will request all records
// with only given fields
// note the usage of gql with jsvascript string literal
export const RECORD_LIST_QUERY = gql`
    query recordList{
        recordList{
            id, title, author
        }
    }
`
// Note the usage of argument.
// the exclamation mark makes the slug argument as required
// without it , argument will be optional
export const RECORD_QUERY = gql`
    query record($title:String!){
        record(title:$title){
            id, title, author, created_at 
        }
    }
`