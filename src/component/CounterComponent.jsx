import React, { Component } from 'react';

export default class CounterComponent extends Component {
  static propTypes = {};

  constructor(props) {
    super();
    //View the log in the console (F12 in Browser)
    console.log('constructor');
    this.state = {
      times: 0, // times is a state, it can be changed and started with 0
      isFloat: false, // isFloat is a state, it can be changed and started with false
    };
  }
  //Or you can write like this with method
  handleClick = () => {
    this.setState({ times: this.state.times + 1 });
  };

  componentDidMount() {
    //View the log in the console (F12 in Browser)
    console.log('componentDidMount');
  }

  //Demo for shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    //If times is a multiple of 3, then return true, otherwise return false
    if (nextState.times % 3 === 0) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //View the log in the console (F12 in Browser)
    console.log('componentDidUpdate', 'prevState: ', prevState, 'currentState: ', this.state);
  }

  render() {
    //View the log in the console (F12 in Browser)
    console.log('render');
    return (
      <div>
        {/*Reading state*/}
        <p>You clicked {this.state.times} times</p>
        {/*<button onClick={() => this.setState({ times: this.state.times + 1 })}>Click me</button>*/}
        <button onClick={() => this.handleClick()}>Click me</button>
        {/*Both of them are the same*/}
      </div>
    );
  }
}
