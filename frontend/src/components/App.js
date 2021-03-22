import React from "react"
import { render } from "react-dom"
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Main from './Main'

const App = () => {
  return (
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
  )
}

export default App;

const container = document.getElementById("root")
render(<App />, container)