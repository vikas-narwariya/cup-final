import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Navbar/NavLogout";
import { Card, CardContent, Container, Typography } from "@material-ui/core";

const UploadedAssignment = () => {
  const [assignmentData, setAssignmentData] = useState([]);

  useEffect(() => {
    axios
      .get("/uploads/getassignment")
      .then((res) => setAssignmentData(res.data.assignmentData))
      .catch((error) => console.log(error));
    console.log(assignmentData);
  }, []);
  return (
    <div>
      <Navbar />
      <Container>
        <div className="div8">
          <h3>Submitted Assignments</h3>
          {assignmentData.map((ta, key) => {
            return (
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  width: "25em",
                  borderRadius: "50px",
                  marginBottom: "20px",
                }}
              >
                <CardContent key={key}>
                  <Typography variant="h5" color="text.secondary" gutterBottom>
                    {ta.title}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" gutterBottom>
                    By: {ta.name}
                  </Typography>
                  <Typography variant="body2" component="div">
                    <span>Github Link :</span>
                    <a
                      href={ta.githublink}
                      target="_blank"
                      className="card-link"
                    >
                      {ta.githublink}
                    </a>
                  </Typography>
                  <Typography variant="body2" component="div">
                    <span>Hosted Link :</span>
                    <a
                      href={ta.githublink}
                      target="_blank"
                      className="card-link"
                    >
                      {ta.hostedlink}
                    </a>
                  </Typography>
                  <Typography variant="body2" component="div">
                    <span>Video Link :</span>
                    <a
                      href={ta.videolink}
                      target="_blank"
                      className="card-link"
                    >
                      {ta.githublink}
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default UploadedAssignment;
