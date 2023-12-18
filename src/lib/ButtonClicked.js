let isFirstParam = true;
let isSecondParam = false;
let isOperator = false;
let firstParam;
let secondParam;
let operator;
let lastOperator;
let lastSecondParam;
let isFloat = false;

export const ButtonClicked = (value, setOutput, output) => {
  const calcResult = (a, b, operator) => {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(a) + parseFloat(b);
        return isValidResult(result) ? result : "!";
      case "-":
        result = parseFloat(a) - parseFloat(b);
        return isValidResult(result) ? result : "!";
      case "*":
        result = parseFloat(a) * parseFloat(b);
        return isValidResult(result) ? result : "!";
      case "/":
        result = parseFloat(a) / parseFloat(b);
        return isValidResult(result) ? result : "!";
      default:
        return "NaN";
    }
  };

  const handleDecimalPoint = () => {
    if (!isFloat) {
      setOutput(output + ".");
      isFloat = true;
    }
  };

  const handleAC = () => {
    setOutput(0);
    isFloat = false;
    isFirstParam = true;
    isSecondParam = false;
    isOperator = false;
    firstParam = undefined;
    secondParam = undefined;
    operator = undefined;
    lastOperator = undefined;
    lastSecondParam = undefined;
  };

  const handleToggleSign = () => {
    if (output !== "0") {
      setOutput((parseFloat(output) * -1).toString());
    }
  };

  const handlePercentage = () => {
    setOutput((parseFloat(output) / 100).toString());
  };

  const handleMathOperator = (value) => {
    isFloat = false;
    if (operator !== undefined) {
      lastOperator = operator;
      operator = undefined;
      secondParam = output;
      let result = calcResult(firstParam, secondParam, lastOperator);
      setOutput(result);
      firstParam = result;
      secondParam = undefined;
      isFirstParam = false;
      isSecondParam = true;
    }
    if (isFirstParam) {
      firstParam = output;
    }
    isOperator = true;
    operator = value;
  };

  const handleCalculation = () => {
    if (
      lastOperator === undefined &&
      lastSecondParam === undefined &&
      firstParam === undefined
    ) {
      firstParam = output;
      setOutput(firstParam);
      return;
    }
    if (operator === undefined && firstParam !== undefined) {
      let result = calcResult(firstParam, lastSecondParam, lastOperator);
      setOutput(result);
      firstParam = result;
      return;
    }
    secondParam = output;
    let result = calcResult(firstParam, secondParam, operator);
    setOutput(result);
    firstParam = result;
    lastOperator = operator;
    lastSecondParam = secondParam;
    operator = undefined;
    secondParam = undefined;
  };

  const handleNumber = (value) => {
    if (isFirstParam) {
      setOutput((pre) => {
        if (pre === 0) {
          return value === 0 ? 0 : value;
        }
        if (isOperator) {
          isSecondParam = true;
        }
        return isValidInputNumber(pre) ? `${pre}${value}` : pre;
      });
    }
    if (isSecondParam) {
      setOutput((pre) => {
        if (pre === 0) {
          return value === 0 ? 0 : value;
        }

        return isValidInputNumber(pre) ? `${pre}${value}` : pre;
      });
    }
    if (isOperator) {
      setOutput(value);
      isOperator = false;
    }
  };
  switch (value) {
    case ",":
      handleDecimalPoint();
      break;
    case "AC":
      handleAC();
      break;
    case "+/-":
      handleToggleSign();
      break;
    case "%":
      handlePercentage();
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      handleMathOperator(value);
      break;
    case "=":
      handleCalculation();
      break;
    default:
      handleNumber(value);
      break;
  }

  function isValidInputNumber(number) {
    return parseFloat(number).toString().length < 12;
  }

  function isValidResult(result) {
    return parseFloat(result).toString().length <= 12;
  }
};
