import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/style.css';

export default class Panel extends Component {
  render() {
    return <div className="panel">{this.props.children}</div>;
  }
}
