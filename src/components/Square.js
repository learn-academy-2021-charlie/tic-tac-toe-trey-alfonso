import React, { Component } from 'react'

export class Square extends Component {
    render() {
        return (
            <div className="square" onClick={this.props.updateBoard}>
                {this.props.squareValue}
            </div>
        )
    }
}

export default Square
