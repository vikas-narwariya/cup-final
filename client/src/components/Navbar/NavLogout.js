import React, { useState, useEffect } from 'react';
import { AppBar,  Toolbar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import assignmentLogo from '../../images/assignmentlogo.png';
import assignmentText from '../../images/assignment.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img component={Link} to="/" src={assignmentText} alt="icon" height="45px" />
        <img className={classes.image} src={assignmentLogo} alt="icon" height="40px" />
      </Link>
      <Toolbar className={classes.toolbar}>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </Toolbar>
      
     
    </AppBar>
  );
};

export default Navbar;
