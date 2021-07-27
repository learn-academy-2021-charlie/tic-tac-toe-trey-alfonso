import './App.css';
import React, { Component } from 'react'
import Square from './components/Square';

export class App extends Component {
  constructor(props){
    super(props)
    this.state={
      board: ["","","","","","","","",""]
    }
  }
  updateBoard = () =>{
    console.log("function is working!");

  }
  
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div id="board">
          {this.state.board.map((value,index) =>{
            return <Square updateBoard = {this.updateBoard} squareValue = {value} squareIndex={index}/>
          })}
        </div>
      </div>
    )
  }
}

export default App

