import react, { useState } from 'react'
import { Table, TableBody, TableRow, TableCell, Typography, Input, Button } from '@material-ui/core'
import React from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_RECORD_MUTATION } from '../mutations/mutations'

const CreateRecord = () => {
    const [ createRecord, { data }] = useMutation(CREATE_RECORD_MUTATION)
    const [ newRecordTitle, setNewRecordTitle ] = useState('')
    const [ newRecordAuthor, setNewRecordAuthor ] = useState('')
    
    return (
        <React.Fragment>
            <form 
                onSubmit={e => {
                    e.preventDefault()
                    if (newRecordTitle && newRecordAuthor) {
                        createRecord({
                            variables: {
                                title: newRecordTitle,
                                author: newRecordAuthor
                            }
                        })
                    }
                    setNewRecordTitle('')
                    setNewRecordAuthor('')
                }
            }>
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
                        <Button variant='outlined' size="large" type="submit">create Record</Button>
                    </TableBody>
                </Table>
            </form>
        </React.Fragment>
    )
}

const Daemon = () => {
    return (
        <React.Fragment>
            <Typography variant="h1">add a record to the database</Typography>
            <CreateRecord />
        </React.Fragment>
    )
}

export default Daemon
