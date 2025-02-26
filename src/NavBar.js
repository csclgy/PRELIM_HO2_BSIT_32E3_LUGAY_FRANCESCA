import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div class="container-fluid p-4" id="MainHeader">
        <h1>Cesca's Application</h1>
      </div>
      <div class="homeNav">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <ul class="nav navbar-nav">
              <li>
                <Link to="/">
                  <i class="fa fa-home" aria-hidden="true"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/body">
                  <i class="fa fa-book" aria-hidden="true"></i> About
                </Link>
              </li>
              <li>
                <Link to="/ToDoList">
                <i class="fa fa-check-square" aria-hidden="true"></i> ToDoList
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
