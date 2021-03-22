import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core"
import useStyles from "../theme/custom"

const Main = () => {
    const { main } = useStyles()
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
        <Grid container direction="column" alignItems="center" className={main}>
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
        </Grid>
    )
}

export default Main
