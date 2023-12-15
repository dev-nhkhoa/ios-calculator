import CaclulatorScreen from "./CalculatorScreen";
import CalculatorTable from "./CalculatorTable";

const Calculator = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-lg flex-col bg-[#1C1C1C] text-white">
        <CaclulatorScreen outputText={"screen"} />
        <CalculatorTable />
      </div>
    </div>
  );
};

export default Calculator;
