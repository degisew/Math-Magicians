/* eslint-disable */

import React, { Component } from 'react';

export default class Rows extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <button onClick={this.props.onClick.bind(this, this.props.buttonName)} className="cal-button" data-testid="button">
          {this.props.buttonName}
        </button>
      </div>
    );
  }
}


