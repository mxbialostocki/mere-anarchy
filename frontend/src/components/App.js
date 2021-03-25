import React from "react"
import { render } from "react-dom"
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Grid } from "@material-ui/core"

import Main from './Main'
import useStyles from "../theme/custom"

const App = () => {
  const { main } = useStyles()

  return (
    <Grid container direction="column" alignItems="left" className={appFrame}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/daemon'>
            <div>daemon</div>
          </Route>
        </Switch>
      </Router>
    </Grid>
  )
}

export default App;

const container = document.getElementById("root")
render(<App />, container)