import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client'
import { RECORD_LIST_QUERY } from "../queries/queries"

import { Typography } from "@material-ui/core"

const Main = () => {
    const { loading, error, data } = useQuery(RECORD_LIST_QUERY);

    // when query starts, loading will be true until the response will back.
    // At this time this will be rendered on screen
    if (loading) return <div>Loading</div>
    
    // if response fail, this will be rendered
    if (error) return <div>Unexpected Error: {error.message}</div>

    //if query succeed, data will be available and render the data
    return(
        <div>
            Is this rendering?
            {data && data.recordList &&
                data.recordList.map(record => (
                    console.log({record}),
                    <li key={record.id}>
                        <Typography variant="h4">{record.title} - {record.author}</Typography>
                    </li>
                ))
            }
        </div>
    )
}

export default Main
