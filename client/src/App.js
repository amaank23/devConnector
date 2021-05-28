import React, { Fragment, useEffect } from 'react';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRouter'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import './App.css';
import CreateProfile from './components/Profile/CreateProfile';
import EditProfile from './components/Profile/EditProfile';
import AddExperience from './components/Experience/AddExperience'
import AddEducation from './components/Education/AddEducation';
import Profile from './components/Profile/Profile';
import Profiles from './components/Profile/Profiles';
import Posts from './components/posts/Posts';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <div className="container">
            <Alert />
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/profile/:id">
              <Profile />
            </Route>
            <Route path="/developers">
              <Profiles />
            </Route>
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/create-profile" component={CreateProfile} />
            <PrivateRoute path="/edit-profile" component={EditProfile} />
            <PrivateRoute path="/add-experience" component={AddExperience} />
            <PrivateRoute path="/add-education" component={AddEducation} />
            <PrivateRoute path="/posts" component={Posts} />
          </div>
        </Switch>
        
      </Fragment>
    </Router>
  );
}

export default App;
