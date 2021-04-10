import react, { useState } from 'react'
import { Table, TableBody, TableRow, TableCell, Typography, Input, Button } from '@material-ui/core'
import React from 'react'

const Daemon = () => {
    const [ newRecordTitle, setNewRecordTitle ] = useState('')
    const [ newRecordAuthor, setNewRecordAuthor ] = useState('')
    
    return (
        <React.Fragment>
            <Typography variant="h1">add a record to the database</Typography>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            Title
                        </TableCell>
                        <TableCell>
                            <Input disableUnderline size="big" type="text" value={newRecordTitle} onChange={(event) => { setNewRecordTitle(event.target.value) }} placeholder="Title" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Author
                        </TableCell>
                        <TableCell>
                            <Input disableUnderline size="big" type="text" value={newRecordAuthor} onChange={(event) => { setNewRecordAuthor(event.target.value) }} placeholder="Author" />
                        </TableCell>
                    </TableRow>
                    <Button variant='outlined' size="large" onClick={() => {
                        if (newRecordTitle && newRecordAuthor) {
                            
                        }
                    }}>create Record</Button>
                </TableBody>
            </Table>
        </React.Fragment>
    )
}

export default Daemon
