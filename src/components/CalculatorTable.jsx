import { RenderMathButton } from "./MathButton";
import { RenderNumbers } from "./NumberButton";
import { RenderThingsButton } from "./ThingsButton";

const CalculatorTable = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-4">
        <RenderThingsButton />
        <RenderNumbers />
      </div>
      <RenderMathButton />
    </div>
  );
};

export default CalculatorTable;
