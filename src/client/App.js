import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./../Pages/Home/index";
// import About from "./About";
// import Contact from "./Contact";

// const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

class App extends React.Component {
  /* ... */

  render() {
    return (
      <div>
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
      </div>
    );
  }
}
export { Home, About, Contact };
export default App;
