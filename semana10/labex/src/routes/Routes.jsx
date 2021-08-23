/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import TripsList from '../pages/TripsList/TripsList'
import SignUpTrip from '../pages/SignUpTrip/SignUpTrip.tsx'
import AdminTripList from '../pages/Administration/AdminTripList'
import AdminCreateTrip from '../pages/Administration/AdminCreateTrip'
import Login from '../pages/Login/Login'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/trips/list" component={TripsList} />
      <Route exact path="/trips/list/application" component={SignUpTrip} />
      <Route exact path="/admin/trips/list" component={AdminTripList} />
      <Route exact path="/admin/trips/create" component={AdminCreateTrip} />
      <Route exact path="/admin/trips/:id" component={AdminTripList} />
    </Switch>
  </Router>
)

export default Routes
