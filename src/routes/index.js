import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import LoginPage from "../pages/LoginPage"
import SomePublicPage from "../pages/SomePublicPage"
import TaskListPage from "../pages/TaskListPage"
import AnalyticsPage from "../pages/AnalyticsPage"
import AddTaskPage from "../pages/AddTaskPage"
import AuthenticatedRoute from './AuthenticatedRoute'
import UnAuthenticatedRoute from './UnAuthenticatedRoute'

function Routes({isAuthenticated}) {
  return (
    <Router>
      <Switch>
        <Route exact path="/somepublicpage" component={SomePublicPage} />
        <UnAuthenticatedRoute exact path="/login" isAuthenticated={isAuthenticated} component={LoginPage} />
        <AuthenticatedRoute exact path="/analytics" isAuthenticated={isAuthenticated} component={AnalyticsPage}/>
        <AuthenticatedRoute exact path="/create" isAuthenticated={isAuthenticated} component={AddTaskPage}/>
        <AuthenticatedRoute exact path="/" isAuthenticated={isAuthenticated} component={TaskListPage} />
      </Switch>
    </ Router>
  )
}

export default Routes