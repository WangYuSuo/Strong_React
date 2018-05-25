import React from "react";



export default class TestComponent extends React.Component {
  //必须调用super
  constructor() {
    super();

    this.state = {
      a: 100
    }

    this.add = this.add.bind(this)
    this.minux = this.minux.bind(this)

  }
  //点击加一
  add() {
    this.setState(
      {
        "a": this.state.a + 1
      }
    )
  }

  //  点击减1
  minux() {
    this.setState({
      "a": this.state.a - 1
    })
  }

  // 上树之前
  componentWillMount() {
    console.log("上树之前执行");

  }
  componentDidMount() {
    console.log("上树之后执行");
    var a = 0;
    setInterval(function(){
      document.getElementById("box").style.left = a ++ + "px";
    },10000)
  }

  shouldComponentUpdate() {
    console.log("当state改变时候触发")
    return true;
  }


  componentWillUpdate() {
    console.log("我是即将更新")
  }
  

  componentDidUpdate() {
    console.log("更新完了")
  }

  render() {
    return <div>
      <h1>我是自定义组件1! a的值为{this.state.a}</h1>
      <button onClick={this.add}>点我加1</button>
      <br />
      <button onClick={this.minux}>点我-1</button>
      <div id="box"></div>
      <img src="./images/107.jpg" alt="" />
    </div>
  }
}