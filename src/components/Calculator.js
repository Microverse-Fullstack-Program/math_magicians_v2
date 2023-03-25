import { React, useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcObj, setCalculation] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const onClickEvent = (event) => {
    const buttonName = event.currentTarget.textContent;
    const newState = calculate(calcObj, buttonName);
    setCalculation(newState);
  };

  const { next, operation, total } = calcObj;

  return (
    <div className="calc-container">
      <div className="output-bar">
        { total }
        {' '}
        { operation }
        {' '}
        { next }
      </div>

      <div>
        <div className="button-rows">
          <button type="button" name="AC" onClick={onClickEvent}>
            AC
          </button>
          <button type="button" name="+/-" onClick={onClickEvent}>
            +/-
          </button>
          <button type="button" name="%" onClick={onClickEvent}>
            %
          </button>
          <button type="button" name="/" onClick={onClickEvent}>
            ÷
          </button>
        </div>
        <div className="button-rows">
          <button type="button" name="7" onClick={onClickEvent}>
            7
          </button>
          <button type="button" name="8" onClick={onClickEvent}>
            8
          </button>
          <button type="button" name="9" onClick={onClickEvent}>
            9
          </button>
          <button type="button" name="x" onClick={onClickEvent}>
            X
          </button>
        </div>

        <div className="button-rows">
          <button type="button" name="4" onClick={onClickEvent}>
            4
          </button>
          <button type="button" name="5" onClick={onClickEvent}>
            5
          </button>
          <button type="button" name="6" onClick={onClickEvent}>
            6
          </button>
          <button type="button" name="-" onClick={onClickEvent}>
            -
          </button>
        </div>
        <div className="button-rows">
          <button type="button" name="1" onClick={onClickEvent}>
            1
          </button>
          <button type="button" name="2" onClick={onClickEvent}>
            2
          </button>
          <button type="button" name="3" onClick={onClickEvent}>
            3
          </button>
          <button type="button" name="+" onClick={onClickEvent}>
            +
          </button>
        </div>
        <div className="last-row">
          <button type="button" name="0" onClick={onClickEvent}>
            0
          </button>
          <button type="button" name="." onClick={onClickEvent}>
            .
          </button>
          <button type="button" name="=" onClick={onClickEvent}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
