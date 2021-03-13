import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from "react-router-dom"

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

/*
    our api client will make request to thils adress.
    at      ~/mere-anarchy/hecate/urls.py
*/
const apiclient = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql',
    cache: new InMemoryCache()

});


const Init = () => (
    <ApolloProvider client={apiclient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
)

ReactDOM.render( <Init />, document.getElementById('root'))