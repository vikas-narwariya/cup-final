import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/NavLogout";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TeacherReview = () => {
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    axios
      .get("/comment/getcomment")
      .then((res) => setCommentData(res.data.commentData))
      .catch((error) => console.log(error));
    console.log(commentData);
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <div>
      <Navbar />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No.</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Assignment</StyledTableCell>
              <StyledTableCell align="right">Comments</StyledTableCell>
              <StyledTableCell align="right">Result</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commentData.map((row, key) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {key + 1}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.title}</StyledTableCell>
                <StyledTableCell align="right">{row.comments}</StyledTableCell>
                <StyledTableCell align="right">{row.result}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TeacherReview;
