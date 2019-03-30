//imports dependencies and files
import React, { Component } from "react";
import Score from "./components/Score";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import vines from "./vines.json";
import "./App.css";


//sets state to 0 or empty
class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    vines,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.Score > this.state.highscore) {
      this.setState({highscore: this.state.Score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.vines.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.vines.find((o, i) => {
      if (o.id === id) {
        if(vines[i].count === 0){
          vines[i].count = vines[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.vines.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <div>
        <Score score={this.state.score} highscore={this.state.highscore}>Clicky Game</Score>
          <Jumbotron />
          <div className="wrapper">
          {this.state.vines.map(vines => (
            
          <Card
          clickCount={this.clickCount}
          id={vines.id}
          name={vines.id}
          image={vines.image}
          />
          

        ))}
        
        </div>
        </div>
    );
}
}

export default App;