import React from 'react';

const Calculator = () => (
      <div className="calc-container">
        <div className="output-bar" />

        <div>
          <div className="button-rows">
            <button type="button" name="AC">
              AC
            </button>
            <button type="button" name="+/-">
              +/-
            </button>
            <button type="button" name="%">
              %
            </button>
            <button type="button" name="/">
              ÷
            </button>
          </div>
          <div className="button-rows">
            <button type="button" name="7">
              7
            </button>
            <button type="button" name="8">
              8
            </button>
            <button type="button" name="9">
              9
            </button>
            <button type="button" name="x">
              X
            </button>
          </div>

          <div className="button-rows">
            <button type="button" name="4">
              4
            </button>
            <button type="button" name="5">
              5
            </button>
            <button type="button" name="6">
              6
            </button>
            <button type="button" name="-">
              -
            </button>
          </div>
          <div className="button-rows">
            <button type="button" name="1">
              1
            </button>
            <button type="button" name="2">
              2
            </button>
            <button type="button" name="3">
              3
            </button>
            <button type="button" name="+">
              +
            </button>
          </div>
          <div className="last-row">
            <button type="button" name="0">
              0
            </button>
            <button type="button" name=".">
              .
            </button>
            <button type="button" name="=">
              =
            </button>
          </div>
        </div>
      </div>
    );

export default Calculator;
