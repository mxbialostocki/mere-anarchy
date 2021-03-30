import React from 'react'
import { render } from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import typography from './theme/typography'
import palette from './theme/palette'

import App from './components/App'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

/*
    our api client will make request to thils adress.
    at      ~/mere-anarchy/hecate/urls.py
*/

const apiclient = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql',
    cache: new InMemoryCache()

})

const theme = createMuiTheme({
    typography,
    palette
  })

const Init = () => (
    <ApolloProvider client={apiclient}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>,
    </ApolloProvider>
)

render (
    <Init />,
    document.getElementById('root')
)
