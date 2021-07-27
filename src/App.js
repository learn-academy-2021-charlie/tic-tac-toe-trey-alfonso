import './App.css';
import React, { Component } from 'react'
import Square from './components/Square';

export class App extends Component {
  constructor(props){
    super(props)
    this.state={
      board: ["","","","","","","","",""],
      turn: 1 
    }
  }
  updateBoard = (index) =>{
    //check if square contains diamond or hand
    if(this.state.board[index] === ""){

      console.log("function is working!");
      this.setState({turn: this.state.turn + 1});
      this.playerIcon(index)

    }else{
      //do nothing
      console.log("please don't overwrite this square")
    }

  }
  playerIcon = (index) => {
    if (this.state.turn  % 2 === 0){
      let newBoard = this.state.board
      newBoard[index] = "🙌"
      this.setState({board: newBoard})
    }else{
      let newBoard = this.state.board
      newBoard[index] = "💎"
      console.log(newBoard)
      this.setState({board: newBoard})
    }
  }
  render() {
    console.log(this.state.board)
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

