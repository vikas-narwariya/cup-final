import React from "react";
import NavLogout from "../../Navbar/NavLogout";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useStyles from "../styles";

const UserDashboard = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <NavLogout />
     
      <Button
        onClick={() => {
          history.push("/userassignment");
        }}
        className={classes.submit}
        variant="contained"
        color="primary"
        style={{marginRight:"20px"}}
      >
        Assignment
      </Button>
      <Button
        onClick={() => {
          history.push("/upload");
        }}
        className={classes.submit}
        variant="contained"
        color="primary"
        style={{marginRight:"20px"}}
      >
        Upload Assignment
      </Button>
      <Button
        onClick={() => {
          history.push("/uploadedassignment");
        }}
        className={classes.submit}
        variant="contained"
        color="primary"
        style={{marginRight:"20px"}}
      >
        Uploaded Assignment
      </Button>
      <Button
        onClick={() => {
          history.push("/teacherreview");
        }}
        className={classes.submit}
        variant="contained"
        color="primary"
        style={{marginRight:"20px"}}
      >
        Teacher Review
      </Button>
      
    </div>
  );
};

export default UserDashboard;
