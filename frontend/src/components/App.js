import React from "react"
import { render } from "react-dom"
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Grid } from "@material-ui/core"

import Main from './Main'
import useStyles from "../theme/custom"

const App = () => {
  const { appBody } = useStyles()

  return (
    <Grid container direction="column" alignItems="center" className={appBody}>
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
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