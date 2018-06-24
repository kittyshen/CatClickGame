import React from "react";
import CatCard from "./components/CatCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./App.css";
import cats from "./cats.json";

// console.log(catsArr);
// const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
// shuffleArray(catsArr);
// console.log("*********************");
// console.log(catsArr);

class App extends React.Component {
  state = {
    highScore:0,
    currentScore:0,
    catsArr:cats
  };

  shuffleArray = () => {
    const randomArr = this.state.catsArr.sort(() => Math.random() - 0.5);
    this.setState({ catsArr:randomArr });

  }

  render() {
    // this.shuffleArray(this.state.catsArr);
    // this.shuffleArray();

    return(
      <Wrapper>
        <Nav/>

        <Header>This is a cat click game </Header>
        { this.state.catsArr.map( cat =>(<CatCard
            name={cat.name}
            image={cat.image}
            key={cat.id}
            shuffleArray = {this.shuffleArray}
          />))}
      </Wrapper>
    )
  };
}
export default App;
