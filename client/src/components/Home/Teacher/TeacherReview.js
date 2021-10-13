import { TextField, Button } from "@material-ui/core";
import { Container } from "@mui/material";
import React,{useState} from "react"
import Navbar from "../../Navbar/NavLogout"
import { useHistory } from "react-router";

const TeacherReview = () => {

    const history = useHistory();

    const [remarks, setRemarks] = useState({
        name: "",
        title: "",
       comments: "",
        result: "",
      });
      let name, value;
      const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setRemarks({
          ...remarks,
          [name]: value,
        });
      };
      const PostData = async (e) => {
        e.preventDefault();
        const { name, title, comments, result } = remarks;
        const res = await fetch("/comment/comment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            title,
            comments,
            result,
          }),
        });
        const data = await res.json();
        if (data.status === 422 || !data) {
          window.alert("Invalid Data!!");
        } else {
          window.alert("Remarked Sucessfully !!!");
          history.push("/teacherdashboard");
          //   history.push("/alogin");
        }
      };

    return (
        <div>
            <Navbar/>
         
<Container>
          <form method="POST">
            <div className="mb-3"><span>Name : </span>
              
              <TextField
                name="name"
                value={remarks.name}
                type="text"
                className="form-control"
                onChange={handleInputs}
                id="formGroupNameInput"
                placeholder="Name of the Student "
                style={{marginBottom:"20px"}}
              />
            </div>
            <div className="mb-3"><span>Assignment Title : </span>
              
              <TextField
                name="title"
                value={remarks.title}
                type="text"
                className="form-control"
                onChange={handleInputs}
                id="formGroupAssInput"
                placeholder="Title of the Assignment "
                style={{marginBottom:"20px"}}
              />
            </div>
            <div className="mb-3"><span>Comments : </span>
              
              <TextField
                name="comments"
                value={remarks.comments}
                className="form-control"
                onChange={handleInputs}
                id="exampleFormControlfeedback"
                rows="5"
                placeholder="Comments"
                style={{marginBottom:"20px"}}
              />
            </div>
            <div className="form-check"><span>Result : </span>
               
              <TextField
                name="result"
                value={remarks.result}
                type="text"
                className="form-control"
                onChange={handleInputs}
                id="formGroupAssInput"
                placeholder="Give result: PASS, FAIL, OUTSTANDING PASS "
                style={{marginBottom:"20px"}}
              />
             
            </div>
            <div className="col-12">
              <Button
                onClick={PostData}
                className="btn btn-primary"
                type="submit"
                name="remakrs"
                value="Remarks"
                style={{backgroundColor:"blue"}}
              >
                Submit Remarks
              </Button>
            </div>
          </form>
       </Container>
       </div>
    )
}

export default TeacherReview
