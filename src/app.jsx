import React, { Component } from 'react';
import Share from './views/share/share';
import './css/main.scss'; // import global css style

export default class App extends Component {
  render() {
    return (
      <div>
        <Share />
      </div>
    );
  }
}
