import React, { Component } from 'react'

export class Square extends Component {
    render() {
        return (
            <div className="square" onClick={(index) => this.props.updateBoard(this.props.squareIndex)}>
                {this.props.squareValue}  
            </div>
        )
    }
}

export default Square
