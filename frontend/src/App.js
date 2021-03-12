import React from "react";
import { Route, Switch, Link } from "react-router-dom"
import { useQuery } from '@apollo/client'
import { BOOK_QUERY, BOOK_LIST_QUERY } from "./query"

import "./App.css"

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={MainPage} />

                // colon before slug means it is a dynamic value
                // that makes slug parameter anything
                // like: /movie/the-matrix-1999   or /movie/anything
                {/* <Route exact path="/movie/:slug" component={MoviePage} /> */}
            </Switch>
        </div>
    )
}

const MainPage = (props) => {
    const { loading, error, data } = useQuery(BOOK_LIST_QUERY);
    
    // when query starts, loading will be true until the response will back.
    // At this time this will be rendered on screen
    if (loading) return <div>Loading</div>
    
    // if response fail, this will be rendered
    if (error) return <div>Unexpected Error: {error.message}</div>

    //if query succeed, data will be available and render the data
    return(
        <div className="main-page">
            {data && data.bookList &&
                data.bookList.map(book => (
                    <div className="book-card" key={book.id}>
                        <p className="book-card-name">{book.title}</p>
                        <Link to={`/book/${book.title}`} className="book-card-link" />
                    </div>
                ))
            }
        </div>
    )
}

// const BookPage = (props) => {
//     // uncomment to see which props are passed from router
//     //console.log(props)

//     // urlParameters will look like this { title: 'title-of-the-selected-book' }
//     const urlParameters = props.match.params

//     const { loading, error, data } = useQuery(BOOK_QUERY, { 
//         variables:{slug:urlParameters.slug}
//     });

//     if (loading) return <div>Loading</div>
//     if (error) return <div>Unexpected Error: {error.message}</div>
  
//     return (
//         <div className="book-page">
//         <Link to="/" className="back-button" >Main Page</Link>
//             {data && data.book && 
//                 <div className="book-page-box">
//                     <div className="movie-page-info">
//                         <h1>{data.book.title}</h1>
//                         <p>{data.book.author}</p>
//                     </div>
//                 </div>
//             }

//         </div>
//     )
// }

export default App