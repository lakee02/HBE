import { Component } from "react";
// Props are arguments pass in react components
export default class Product extends Component {
    constructor(){
        super();

    }
    render(){

        return(

            <>
            <h1>This is Product class Component</h1>
            <h2>Pid: {this.props.pid} PName:{this.props.pname} Price: {this.props.price}</h2>
            </>
        );
    }
}