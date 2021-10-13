import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Admin from './components/Auth/Admin';
import Teacher from './components/Auth/Teacher';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import UserDashboard from './components/Home/User/UserDashboard';
import UploadAssignment from './components/Home/User/UploadAssignment';
import TeacherDashboard from './components/Home/Teacher/TeacherDashboard';
import Dashboard from './components/Home/Dashboard';
import AdminDashboard from './components/Home/Admin/AdminDashboard';
import TeacherDetail from './components/Home/Admin/TeacherDetail';
import StudentDetail from './components/Home/Admin/StudentDetail';
import Assignment from './components/Home/Admin/Assignment';
import Assignment1 from './components/Home/User/Assignment';
import UploadedAssignment from './components/Home/User/UploadedAssignment';
import SubmittedAssignment from './components/Home/Admin/SubmittedAssignment';
import TeacherReview from './components/Home/Admin/TeacherReview';
import TeacherReviewAssign from './components/Home/Teacher/TeacherReview';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/posts" exact component={Home} />
          <Route path="/userdashboard" component={UserDashboard} exact />
          <Route path="/teacherdetail" component={TeacherDetail} exact />
          <Route path="/studentdetail" component={StudentDetail} exact />
          <Route path="/assignment" component={Assignment} exact />
          <Route path="/userassignment" component={Assignment1} exact/>
          <Route path="/upload" component={UploadAssignment} exact />
          <Route path="/teacherdashboard" component={TeacherDashboard} exact />
          <Route path="/admindashboard" component={AdminDashboard} exact/>
          <Route path="/uploadedAssignment" component={UploadedAssignment} exact/>
          <Route path="/submittedassignment" component={SubmittedAssignment} exact />
          <Route path="/teacherreview" component={TeacherReview} exact />
          <Route path="/teacherreviewassign" component={TeacherReviewAssign} exact />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/userdashboard" />)} />
          <Route path="/admin/asignin" exact component={() => (!user ? <Admin /> : <Redirect to="/posts" />)} />
          <Route path="/teacher/tsignin" exact component={() => (!user ? <Teacher /> : <Redirect to="/teacherdashboard" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
