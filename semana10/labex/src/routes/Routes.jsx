import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/HomePage/HomePage'
import ListTripPage from '../pages/ListTripsPage/ListTripsPage'
import ApplicationForm from '../pages/ApplicationFormPage/ApplicationFormPage'
import AdminHome from '../pages/AdminHomePage/AdminHomePage'
import Login from '../pages/LoginPage/LoginPage'
import CreateTrips from '../pages/CreateTripPage/CreateTripPage'
import DetailsTrips from '../pages/TripDetailsPage/TripDetailsPage'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/listTrips" component={ListTripPage} />
      <Route exact path="/applicationform" component={ApplicationForm} />
      <Route exact path="/adminPage" component={AdminHome} />
      <Route exact path="/loginPage" component={Login} />
      <Route exact path="/createTrips" component={CreateTrips} />
      <Route exact path="/detailsTrips" component={DetailsTrips} />
    </Switch>
  </Router>
)

export default Routes
