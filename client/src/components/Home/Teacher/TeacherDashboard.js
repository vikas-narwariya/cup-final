import React from "react";
import { Button } from "@material-ui/core";
import NavLogout from "../../Navbar/NavLogout";
import { useHistory } from "react-router";
import useStyles from "../styles";

const TeacherDashboard = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <NavLogout />

      <Button
        onClick={() => {
          history.push("/studentdetail");
        }}
        className={classes.submit}
        variant="contained"
        color="primary"
        style={{ marginRight: "20px" }}
      >
        Student Details
      </Button>
      <Button
        onClick={() => {
          history.push("/teacherreview");
        }}
        className={classes.submit}
        variant="contained"
        color="primary"
        style={{ marginRight: "20px" }}
      >
        Teacher Review
      </Button>
      <Button
        onClick={() => {
          history.push("/submittedassignment");
        }}
        className={classes.submit}
        variant="contained"
        color="primary"
        style={{ marginRight: "20px" }}
      >
        Student Assignments
      </Button>
      <Button
        onClick={() => {
          history.push("/teacherreviewassign");
        }}
        className={classes.submit}
        variant="contained"
        color="primary"
        style={{ marginRight: "20px" }}
      >
        Review Assignment
      </Button>
    </div>
  );
};

export default TeacherDashboard;
