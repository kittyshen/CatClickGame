# CatClickGame
UC Berkeley coding assignment 15

## Clicky Game

### Overview

For this assignment, you'll create a memory game with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.


### Instructions

1. Check out the [example solution](https://clicky-game.netlify.com/) and study the app's basic functionality.

2. Create a new React application using [Create React App](https://github.com/facebookincubator/create-react-app).

3. The application should render different images (of your choice) to the screen. Each image should listen for click events.

4. The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

5. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

6. Once the user's score is reset after an incorrect guess, the game should restart.


## Technical Aspects

### Built With
* [React](https://reactjs.org/)

(https://reactjs.org/docs/hello-world.html)

```javascript
//heroku database set up quick reference
`npm install -g create-react-app yarn`
`create-react-app  newappname`
`yarn add axios`
`yarn install`

```  

```js

class App extends React.Component {
  state = {
    highScore:0,
    currentScore:0,
    catsArr:cats,
    c1:false,
    c2:false,
    ...
  };

  shuffleArray = (id) => {
    if(this.state[id] == true){
      alert("game over");
      // reset game to initial status
      this.setState({currentScore: 0, 
      ...
      })
    }
  };

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
```

```js
import React from "react";
import "./CatCard.css";

const CatCard = props => (
  <div className="card">
    <div className="img-container">
      <button className ="btn" onClick = {()=>props.shuffleArray(props.id)} >
        <img alt={props.name} src={props.image} />
      </button>
    </div>

  </div>
);

export default CatCard;
```

## Link to the site
[https://kittycat-clickgame.herokuapp.com/](https://kittycat-clickgame.herokuapp.com/)

## Author 
[Kitty Shen ](https://github.com/kittyshen)

https://github.com/kittyshen

### [Link to Portfolio Site](https://kittyshen.github.io/Portfolio/)

## License
Standard MIT License



