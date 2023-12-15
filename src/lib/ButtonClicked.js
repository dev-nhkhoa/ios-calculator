export const ButtonClicked = (value, setOutput) => {
  switch (value) {
    // things clicked
    case ",":
      break;
    case "AC":
      setOutput(0);
      break;
    case "+/-":
      break;
    case "%":
      break;

    // math clicked
    case "+":
    case "-":
    case "*":
    case "/":
      break;

    // handle calculation
    case "=":
      break;

    // numbers clicked
    default:
      setOutput(value);
      break;
  }
};
