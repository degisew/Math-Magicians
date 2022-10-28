//* eslint-disable */

import React, { useState } from 'react';
import Rows from './calcRows';
import calculate from '../logic/calculate';

const calculator = () => {
  const [res, setRes] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const eventHandler = (id) => {
    setRes((init) => calculate(init, id));
  };
  return (
    <div className="calc-container">
      <div className="calc-screen" data-testid="display">
        <span>{res.total}</span>
        <span>{res.operation}</span>
        <span>{res.next}</span>
      </div>
      <Rows
        buttonName="AC"
        onClick={eventHandler}
        className="td row1-col1"
      />
      <Rows
        buttonName="+/-"
        onClick={eventHandler}
        className="td row1-col2"
      />
      <Rows
        data-testid="ac"
        buttonName="%"
        onClick={eventHandler}
        className="td row1-col3"
      />
      <Rows
        buttonName="÷"
        onClick={eventHandler}
        className="td row1-col4 operator"
      />
      <Rows
        buttonName="7"
        onClick={eventHandler}
        className="td row2-col1"
      />
      <Rows
        buttonName="8"
        onClick={eventHandler}
        className="td row2-col2"
      />
      <Rows
        buttonName="9"
        onClick={eventHandler}
        className="td row2-col3"
      />
      <Rows
        buttonName="x"
        onClick={eventHandler}
        className="td row2-col4 operator"
      />
      <Rows
        buttonName="4"
        onClick={eventHandler}
        className="td row3-col1"
      />
      <Rows
        buttonName="5"
        onClick={eventHandler}
        className="td row3-col2"
      />
      <Rows
        buttonName="6"
        onClick={eventHandler}
        className="td row3-col3"
      />
      <Rows
        buttonName="-"
        onClick={eventHandler}
        className="td row3-col4 operator"
      />
      <Rows
        buttonName="1"
        onClick={eventHandler}
        className="td row4-col1"
      />
      <Rows
        buttonName="2"
        onClick={eventHandler}
        className="td row4-col2"
      />
      <Rows
        buttonName="3"
        onClick={eventHandler}
        className="td row4-col3"
      />
      <Rows
        buttonName="+"
        onClick={eventHandler}
        className="td row4-col4 operator"
      />
      <Rows
        buttonName="0"
        onClick={eventHandler}
        className="td row5-col1"
      />
      <Rows
        buttonName="."
        onClick={eventHandler}
        className="td row5-col2"
      />
      <Rows
        buttonName="="
        onClick={eventHandler}
        className="td row5-col3 operator"
      />
    </div>
  );
};

export default calculator;
