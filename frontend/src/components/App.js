import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Typography } from "@material-ui/core"

const App = () => {
  const [ data, setData ] = useState([])
  const [ loaded, setLoaded ] = useState(false)
  const [ placeholder, setPlaceholder ] = useState("Loading")

  useEffect(() => {
    fetch("api/kali")
      .then(response => {
        if (response.status > 400) {
          return setPlaceholder("Something went wrong!")
        }
        return response.json();
      })
      .then(data => {
        setData(data)
        setLoaded(true)
      })
  }, [])

  return (
    <ul>
      {
        data.map(record => {
          return (
            <li key={record.id}>
              <Typography variant="h4">{record.title} - {record.author}</Typography>
            </li>
          )
        })
      }
    </ul>
  )
}

export default App;

const container = document.getElementById("app")
render(<App />, container)