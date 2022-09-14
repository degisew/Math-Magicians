/* eslint-disable */

import React, { Component } from 'react';
import Rows from './calcRows';

export default class Calculator extends Component {
  render() {
    return (
      <div className="calc-container">
        <Rows val="0" className=" calc-screen" />
        <Rows val="AC" className="td row1-col1" />
        <Rows val="+/-" className="td row1-col2" />
        <Rows val="%" className="td row1-col3" />
        <Rows val="/" className="td row1-col4 operator" />
        <Rows val="7" className="td row2-col1" />
        <Rows val="8" className="td row2-col2" />
        <Rows val="9" className="td row2-col3" />
        <Rows val="x" className="td row2-col4 operator" />
        <Rows val="4" className="td row3-col1" />
        <Rows val="5" className="td row3-col2" />
        <Rows val="6" className="td row3-col3" />
        <Rows val="-" className="td row3-col4 operator" />
        <Rows val="1" className="td row4-col1" />
        <Rows val="2" className="td row4-col2" />
        <Rows val="3" className="td row4-col3" />
        <Rows val="+" className="td row4-col4 operator" />
        <Rows val="0" className="td row5-col1" />
        <Rows val="." className="td row5-col2" />
        <Rows val="=" className="td row5-col3 operator" />
      </div>
    );
  }
}
