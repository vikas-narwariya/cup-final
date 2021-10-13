import { TextField , Paper, Typography, Button, Container} from "@material-ui/core";
import React,{ useState } from "react";
import NavLogout from "../../Navbar/NavLogout";
import { useHistory } from "react-router";

const initialState = { name: '', title: '', githublink: '', hostedlink: '', videolink: '' };

const UploadAssignment = () => {

    const history = useHistory();
    const [assignment, setAssignment] = useState({
        name: "",
        title: "",
        githublink: "",
        hostedlink: "",
        videolink: "",
      });
      let name, value;
      const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setAssignment({
          ...assignment,
          [name]: value,
        });
      };


      const PostData = async (e) => {
        e.preventDefault();
        const { name, title, githublink, hostedlink, videolink } = assignment;
        const res = await fetch("/uploads/uploadassignment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            title,
            githublink,
            hostedlink,
            videolink,
          }),
        });
        const data = await res.json();
        if (data.status === 422 || !data) {
          window.alert("Invalid Data!!");
        } else {
          window.alert("Assignment Submitted Sucessffuly  !!");
          history.push("/uploadedassignment");
          //   history.push("/alogin");
        }
      };
    return (
        <div>
           <NavLogout/>

    <Container>
        <form method="POST">
          <div className="form-group"><span>Name : </span>
            <TextField
              type="text"
              name="name"
              className="form-controls"
              value={assignment.name}
              onChange={handleInputs}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group"><span>Title : </span>
            <TextField
              type="text"
              name="title"
              className="form-controls"
              value={assignment.title}
              onChange={handleInputs}
              placeholder="Enter title of your Assignment"
            />
          </div>
          <div className="form-group"><span>Github Link : </span>
            <TextField
              type="text"
              name="githublink"
              className="form-control-file"
              value={assignment.githublink}
              onChange={handleInputs}
              placeholder="Enter Github URL"
            />
          </div>
          <div className="form-group"><span>Hosted Link : </span>
            <TextField
              type="text"
              name="hostedlink"
              value={assignment.hostedlink}
              onChange={handleInputs}
              placeholder="Enter Hosted URL"
              className="form-control-file"
            />
          </div>
          <div className="form-group"><span>Video Link : </span>
            <TextField
              type="text"
              name="videolink"
              value={assignment.videolink}
              onChange={handleInputs}
              className="form-control-file"
              placeholder="Enter Video URL"
            />
          </div>
          <div className="form-group form-button">
            <Button
            variant="contained" color="primary" size="large"
              type="submit"
              name="signup"
              id="signup"
              className="form-submit"
              value="Assignment"
              onClick={PostData}
            >Submit Assignment</Button>
          </div>
        </form>
            
        </Container>
        </div> 

    )
}

export default UploadAssignment;



