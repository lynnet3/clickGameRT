import React, {Component} from  "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Banner from "./components/Banner";

class Game extends Component {
    state = {
        score: 0,
        highScore: 0,
    };

    setClicked = id => {

        // Make a copy of the state matches array to work with
        const matches = this.state.matches;

        // Filter for the clicked match
        const clickedMatch = matches.filter(match => match.id === id);

        // If the matched image's clicked value is already true, 
        // do the game over actions
        if (clickedMatch[0].clicked){

            console.log ("Corrent Score: " + correntScore);
            console.log ("Best Score: " + bestScore);

            correntScore = 0;
            clickMessage = "You've clicked on that one already."

            for (let i = 0 ; i < matches.length ; i++){
                matches[i].clicked = false;
            }

            this.setState({clickMessage});
            this.setState({ correntScore });
            this.setState({matches});

        // Otherwise, if clicked = false, and the user hasn't finished
        } else if (correntScore < 11) {

            // Set its value to true
            clickedMatch[0].clicked = true;

            // increment the appropriate counter
            correntScore++;
            

            if (correntScore > bestScore){
                bestScore = correntScore;
                this.setState({ bestScore });
            }

            // Shuffle the array to be rendered in a random order
            matches.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.matches equal to the new matches array
            this.setState({ matches });
            this.setState({correntScore});
            this.setState({clickMessage});
        } else {

            // Set its value to true
            clickedMatch[0].clicked = true;

            // restart the guess counter
            correntScore = 0;

            // Egg on the user to play again
            clickMessage = "Would you like to play again?";
            bestScore = 13;
            this.setState({ bestScore });
            
            for (let i = 0 ; i < matches.length ; i++){
                matches[i].clicked = false;
            }

            // Shuffle the array to be rendered in a random order
            matches.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.matches equal to the new matches array
            this.setState({ matches });
            this.setState({correntScore});
            this.setState({clickMessage});

        }
    };
    render() {
        const state = this.state;
        return (
          <div>
            <Navbar
              score={state.score}
              highScore={state.highScore}
            />
            <Banner />
            <Container
              shake={state.shake}
              characters={state.allCharacters}
              clickEvent={this.clickEvent}
            />
          </div>
        );
      }
    }
    export default Game;
