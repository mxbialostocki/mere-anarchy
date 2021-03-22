import React from 'react'
import { render } from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'

import typography from './theme/typography'
import palette from './theme/palette'

import App from './components/App'

const theme = createMuiTheme({
    typography,
    palette
  })

  render (
    <Router>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Router>,
    
document.getElementById('app')
)