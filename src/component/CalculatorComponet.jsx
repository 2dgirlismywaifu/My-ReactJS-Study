import React, { Component } from 'react';

//A simple calculator component will sum two numbers from user input
class CalculatorComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: 0,
      secondNumber: 0,
    };
  }
  //Event for first input
  firstNumberChange = (event) => {
    //get value from input when user type
    this.setState({ firstNumber: event.target.value });
  };

  secondNumberChange = (event) => {
    //get value from input when user type
    this.setState({ secondNumber: event.target.value });
  };

  handleSum = () => {
    //Return the sum of two numbers and alert it
    let sum = parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber);
    alert('Sum: ' + sum);
  };
  //Test the event in console log to check the state of firstNumber is changed
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', 'prevState: ', prevState, 'currentState: ', this.state);
  }

  render() {
    return (
      <div>
        <form>
          <h2>Simple Calculator</h2>
          <br />
          <table>
            <tbody>
              <tr>
                <td>Enter First Number</td>
                <td>
                  <input
                    type="number"
                    name="firstNumber"
                    value={this.state.firstNumber}
                    onChange={(event) => this.firstNumberChange(event)}
                  />
                </td>
              </tr>
              <tr>
                <td>Enter Second Number</td>
                <td>
                  <input
                    type="number"
                    name="secondNumber"
                    value={this.state.secondNumber}
                    onChange={(event) => this.secondNumberChange(event)}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td onClick={() => this.handleSum()}>Sum</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default CalculatorComponet;
