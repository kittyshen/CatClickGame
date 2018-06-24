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
    catsArr:cats,
    c1:false,
    c2:false,
    c3:false,
    c4:false,
    c5:false,
    c6:false,
    c7:false,
    c8:false,
    c9:false,
    c10:false,
    c11:false,
    c12:false
  };

  shuffleArray = (id) => {
    if(this.state[id] == true){
      alert("game over");
      // reset game to initial status
      this.setState({currentScore: 0, 
        c1:false,
        c2:false,
        c3:false,
        c4:false,
        c5:false,
        c6:false,
        c7:false,
        c8:false,
        c9:false,
        c10:false,
        c11:false,
        c12:false
      });
    }
    else{ // continue game set the clicked to true
      this.setState({[id]:true})
      this.setState({currentScore: this.state.currentScore+1})
      if(this.state.currentScore >= this.state.highScore){
        //only update highscore when current is higher than highscore
        this.setState({highScore: this.state.highScore+1})
      }
      const randomArr = this.state.catsArr.sort(() => Math.random() - 0.5);
      this.setState({ catsArr:randomArr });
    }

  }

  render() {
    // this.shuffleArray();

    return(
      <Wrapper>
        <Nav currentScore ={this.state.currentScore} highScore = {this.state.highScore}/>

        <Header>This is a cat click game </Header>
        { this.state.catsArr.map( cat =>(<CatCard
            key = {cat.id}
            name={cat.name}
            image={cat.image}
            id={`c${cat.id}`}  //template literal concaste string together
            shuffleArray = {this.shuffleArray}
          />))}
      </Wrapper>
    )
  };
}
export default App;
