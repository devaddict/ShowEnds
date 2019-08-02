import React from "react";
import Siteheader from "../src/components/common/Header";

import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { Nav } from "reactstrap";
//import * as Func from "./Dataconnect";
import Personal from "./components/shows/Personal";
import Popular from "./components/Popular";

function App() {
  //console.log(this.winows.location);

  return (
    <div>
      <Router>
        <Siteheader />
        <Nav pills className="justify-content-center">
          <NavLink
            activeClassName="active"
            className="nav-link"
            href="/"
            exact
            to="/"
          >
            Favourite
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-link"
            href="/Popular"
            to="/Popular"
          >
            Popular
          </NavLink>
        </Nav>

        <Route exact path="/" component={Personal} />
        <Route path="/Popular" component={Popular} />
      </Router>
      {/* <Showlist shows={data.result} /> */}
    </div>
  );
}

export default App;
