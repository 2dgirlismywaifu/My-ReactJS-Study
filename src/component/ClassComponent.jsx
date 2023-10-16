import { Component } from 'react';

export class ClassComponent extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
