import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 0,

  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  rightButton: {
    marginLeft: 'auto'
  }
};

const Navbar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
