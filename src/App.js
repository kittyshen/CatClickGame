import React from "react";
import CatCard from "./components/CatCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cats from "./cats.json";
import Nav from "./components/Nav";
import "./App.css";

const App = () => {
  // const cats = cats;
  return (

  <Wrapper>
    <Nav/>

    <Header>This is a cat click game </Header>
   { cats.map( cat =>(<CatCard
      name={cat.name}
      image={cat.image}

    />))}
  </Wrapper>
);
}
export default App;
