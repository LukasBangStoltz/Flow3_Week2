import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import Header from "./Header.js";
import Products from "./Products.js";

import AddBook from "./AddBook";
import FindBook from "./FindBook";

function App(props) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFacade={props.bookFacade} />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={props.bookFacade}/>
        </Route>
        <Route path="/find-book">
          <FindBook bookFacade={props.bookFacade}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
