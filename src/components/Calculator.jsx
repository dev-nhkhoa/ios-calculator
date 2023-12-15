import CaclulatorScreen from "./CalculatorScreen";
import CalculatorTable from "./CalculatorTable";

const Calculator = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-max max-w-lg flex-col gap-4 bg-[#1C1C1C] text-white">
        <CaclulatorScreen outputText={"screen"} />
        <CalculatorTable />
      </div>
    </div>
  );
};

export default Calculator;
