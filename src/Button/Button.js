import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});



const myButton = (props) => {
  const { classes } = props;
  return (
    <Button
      variant="contained"
      color={props.color}
      className={classes.button}
      onClick={props.clickEvent}
    >
      {props.label}
    </Button>
  );
  }

export default withStyles(styles)(myButton);
