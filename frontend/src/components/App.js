import React from "react"
import { render } from "react-dom"
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { Grid } from "@material-ui/core"

import Main from './Main'
import useStyles from "../theme/custom"

/*
    our api client will make request to thils adress.
    at      ~/mere-anarchy/hecate/urls.py
*/

const apiclient = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql',
  cache: new InMemoryCache()

})

const App = () => {
  const { appBody } = useStyles()

  return (
    <Grid container direction="column" alignItems="center" className={appBody}>
      <Router>
        <Switch>
        <ApolloProvider client={apiclient}>

          <Route exact path='/' component={Main} />
          <Route exact path='/daemon'>
            <div>daemon</div>
          </Route>
          </ApolloProvider>

        </Switch>
      </Router>
    </Grid>
  )
}

export default App;
