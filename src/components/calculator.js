/* eslint-disable */

import React, { Component } from 'react';
import Rows from './calcRows';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  state = {
    total: 0,
    next: null,
    operation: null,
  };

  eventHandler = (id) => {
    const result = calculate(this.state, id);
    this.setState(result);
  };

  render() {
    return (
      <div className="calc-container">
        <div className=" calc-screen">
          <span>{this.state.total}</span>
          <span>{this.state.operation}</span>
          <span>{this.state.next}</span>
        </div>
        <Rows
          buttonName="AC"
          onClick={this.eventHandler}
          className="td row1-col1"
        />
        <Rows
          buttonName="+/-"
          onClick={this.eventHandler}
          className="td row1-col2"
        />
        <Rows
          buttonName="%"
          onClick={this.eventHandler}
          className="td row1-col3"
        />
        <Rows
          buttonName="÷"
          onClick={this.eventHandler}
          className="td row1-col4 operator"
        />
        <Rows
          buttonName="7"
          onClick={this.eventHandler}
          className="td row2-col1"
        />
        <Rows
          buttonName="8"
          onClick={this.eventHandler}
          className="td row2-col2"
        />
        <Rows
          buttonName="9"
          onClick={this.eventHandler}
          className="td row2-col3"
        />
        <Rows
          buttonName="x"
          onClick={this.eventHandler}
          className="td row2-col4 operator"
        />
        <Rows
          buttonName="4"
          onClick={this.eventHandler}
          className="td row3-col1"
        />
        <Rows
          buttonName="5"
          onClick={this.eventHandler}
          className="td row3-col2"
        />
        <Rows
          buttonName="6"
          onClick={this.eventHandler}
          className="td row3-col3"
        />
        <Rows
          buttonName="-"
          onClick={this.eventHandler}
          className="td row3-col4 operator"
        />
        <Rows
          buttonName="1"
          onClick={this.eventHandler}
          className="td row4-col1"
        />
        <Rows
          buttonName="2"
          onClick={this.eventHandler}
          className="td row4-col2"
        />
        <Rows
          buttonName="3"
          onClick={this.eventHandler}
          className="td row4-col3"
        />
        <Rows
          buttonName="+"
          onClick={this.eventHandler}
          className="td row4-col4 operator"
        />
        <Rows
          buttonName="0"
          onClick={this.eventHandler}
          className="td row5-col1"
        />
        <Rows
          buttonName="."
          onClick={this.eventHandler}
          className="td row5-col2"
        />
        <Rows
          buttonName="="
          onClick={this.eventHandler}
          className="td row5-col3 operator"
        />
      </div>
    );
  }
}
