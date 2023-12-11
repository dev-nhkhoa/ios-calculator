import NumbersButtons from "./Buttons/NumbersButtons";
import MathsButtons from "./Buttons/MathsButtons";
import ThingsButtons from "./Buttons/ThingsButtons";

const CalculatorButtonsTable = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <ThingsButtons />
        </div>
        <NumbersButtons />
      </div>
      <MathsButtons />
    </div>
  );
};

export default CalculatorButtonsTable;
