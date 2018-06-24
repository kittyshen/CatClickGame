import React from "react";
import "./Header.css";

const Header = props => {

return (
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">{props.children}</h1>
        <p class="lead">Click on an image to earn points, but don't click on any more than once</p>
    </div>
    </div>
)

}
export default Header;
