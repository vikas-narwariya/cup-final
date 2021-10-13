import { Button, Card } from "@material-ui/core"
import React from "react"
import NavLogout from "../../Navbar/NavLogout"
import Home from "../Home"
import useStyles from '../styles';
import Assignment from "./Assignment";
import StudentDetail from "./StudentDetail";
import TeacherDetail from "./TeacherDetail";
import { useHistory } from "react-router";
const AdminDashboard = () => {

    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
            <NavLogout />
            
            <Button 
            onClick={()=>{history.push("/teacherdetail")}} 
            className={classes.submit} variant="contained" color="primary">Teacher Details</Button>
            <Button 
            onClick={()=>{history.push("/studentdetail")}}
            className={classes.submit} variant="contained" color="primary">Student Details</Button>
            <Button 
            onClick={()=>{history.push("/assignment")}}
            className={classes.submit} variant="contained" color="primary">Assignments</Button>
            <Button 
            onClick={()=>{history.push("/submittedassignment")}}
            className={classes.submit} variant="contained" color="primary">Submitted Assignments</Button>
            <Button 
            onClick={()=>{history.push("/teacherreview")}}
            className={classes.submit} variant="contained" color="primary">Teacher Review</Button>
                {/* <Button >Teacher Details</Button><br/>
                <Button >Student Details</Button><br/>
                <Button >Assignment</Button> */}
     
            
        </div>
    )
}


export default AdminDashboard
