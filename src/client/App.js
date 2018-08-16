import React, { Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./../Pages/Home/index";
import Contact from "./../Pages/Contact/index";

const About = () => <div>About</div>;
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>{"asdsd"}</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Fragment>
    );
  }
}
export { Home, About, Contact };
export default App;
