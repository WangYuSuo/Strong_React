import React from "react";
import TestComponent1 from "./TestComponent1.js";
import TestComponent2 from "./TestComponent2.js"



export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      a: 10
    }
  }



  add() {
    this.setState({
      "a": this.state.a + 1
    })
  }


  render() {
    console.log("我是render")
    return (
      <div>
        <h1 id="before">你好我是App组件!爱你{250 * 2}年{this.state.a}!</h1>
        <button onClick={this.add.bind(this)}>点击我a值加1</button>
        <TestComponent1></TestComponent1>
        <TestComponent2></TestComponent2>
      </div>
    )
  }
};