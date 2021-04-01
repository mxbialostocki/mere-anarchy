//import our graph query parser
import gql from "graphql-tag";

// our first query will requests all books
// with only given fields
// note the usage of gql with jsvascript string literal
export const BOOK_LIST_QUERY = gql`
    query bookList{
        bookList{
            id, title, author
        }
    }
`
// Note the usage of argument.
// the exclamation mark makes the slug argument as required
// without it , argument will be optional
export const BOOK_QUERY = gql`
    query book($title:String!){
        book(title:$title){
            id, title, author, created_at 
        }
    }
`