import React, { Component } from 'react'

export default class Student extends Component {
    constructor(){
        super();
        this.state ={
            id:101,
            name:"lucky",
            fee:5000
        }
    }
  render() {
    return (
      <div>
        <h1>Student Details</h1>
        <h2>{this.state.id}</h2>
        <h2>{this.state.name}</h2>
        <h2>{this.state.fee}</h2>
      </div>
    )
  }
}
