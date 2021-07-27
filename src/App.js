import './App.css';
import React, { Component } from 'react'
import Square from './components/Square';

export class App extends Component {
  constructor(props){
    super(props)
    this.state={
      board: ["","","","","","","","",""],
      turn: 1,
      winningCombo:[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]]
    }
    
  }
  updateBoard = (index) =>{
    //check if square contains diamond or hand
    if(this.state.board[index] === ""){
      this.setState({turn: this.state.turn + 1});
      this.playerIcon(index)      
    }else{
      //do nothing
    }

  }
  // all of the diaganals are even
  //Winning condition  
  // vertical 0,3,6|| 1,4,7 || 2,5,8
  // horizontal: 0,1,2||3,4,5||6,7,8
  // diagonal : 0,4,8 || 2,4,6
  winningCondition = () => {
    //console.log(this.state.board)
    for (let index = 0; index < this.state.winningCombo.length; index++) {
      let winningIndexes = this.state.winningCombo[index]
      let firstWinning = winningIndexes[0]
      let secondWinning = winningIndexes[1]
      let thirdWinning = winningIndexes[2]
      //console.log('am 1st' ,firstWinning, "am 2nd", secondWinning,"am 3rd", thirdWinning)
      //console.log("i am .boards index",this.state.board[firstWinning],this.state.board[secondWinning],this.state.board[thirdWinning])
      //console.log("i am the index of the for loop ",index)
        if (this.state.board[firstWinning] === "💎"
        && this.state.board[secondWinning] === "💎"
        && this.state.board[thirdWinning] ===  "💎"){
         alert("Diamonds Wins")
         //setTimeout(this.reset,3000)

        }else if((this.state.board[firstWinning] === "🙌"
        && this.state.board[secondWinning] === "🙌"
        && this.state.board[thirdWinning] ===  "🙌")){
          alert("Hands Wins")
          //setTimeout(this.reset,3000)
        }else if(this.state.turn === 10){
          alert("It's a Tie!")
          break
        }
          else{
          //console.log("next turn")
        }
    }
  }
  //reset game state


  // this.state.board[index] shows individual emoticons USELESS
  playerIcon = (index) => {
    if (this.state.turn  % 2 !== 0){
      let newBoard = this.state.board
      newBoard[index] = "🙌"

      this.setState({board: newBoard})
    }else{
      let newBoard = this.state.board
      newBoard[index] = "💎"


      this.setState({board: newBoard})
    }
  }
  render() {
    console.log(this.state.board)
    this.winningCondition()
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div id="board">
          {this.state.board.map((value,index) =>{
            return <Square updateBoard = 
              {this.updateBoard} squareValue = {value} 
              squareIndex={index}
              key={index}/>
          })}
        </div>
      </div>
    )
  }
}

export default App

