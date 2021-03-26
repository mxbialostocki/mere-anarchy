import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appMain: {
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start'
    }
  },
  colorTest: {
      color: "red"
  }
}))

export default useStyles