import React from "react";
import "./Nav.css";

const Nav = props => {

return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
        Cat Game
      </a>
      <ul>
        <li>Current Score: {props.currentScore}</li>
        <li>High Score: {props.highScore}</li>
      </ul>
    </nav>
)

}
export default Nav;
