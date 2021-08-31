import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Feed from "../pages/Feed/Feed";
import Post from "../pages/Post/Post";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact ppath="/login" component={Login} />
      <Route exact path="/feed" component={Feed} />
      <Route exact path="/post" component={Post} />
    </Switch>
  </Router>
);

export default Routes;
