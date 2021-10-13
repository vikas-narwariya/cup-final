import React, {useState} from "react";
import { Container, Grow, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import Posts from '../../Posts/Posts';
import Pagination from '../../Pagination';
import useStyles from '../styles';
import NavLogout from "../../Navbar/NavLogout";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Assignment = () => {

  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();



 

    return (
        <div>
          <NavLogout/>
            <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
         
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
         </Grid>
       </Container>
    </Grow>
        </div>
    )
}

export default Assignment
