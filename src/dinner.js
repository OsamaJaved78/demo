import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  }));
 


function Dinner(props) {
     const classes = useStyles();
    return (
        <div className={classes.root}>
        <form className={classes.container} noValidate>
        <Paper className={classes.paper}>
      <TextField
        id="date"
        type="date"
        defaultValue="Select Date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        
      />
      </Paper>
    </form>
    </div>
    )
}

export default Dinner;