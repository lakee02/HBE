import React, { Component } from 'react'

export default class Demo extends Component {
    
    handleEvent(){

    }
  render() {
    return (
      <div>
        <button onClick={this.handleEvent}>Add</button>
      </div>
    )
  }
}
