import CalculatorScreen from "./CalculatorScreen";
import CalculatorButtonsTable from "./CalculatorButtonsTable";

const AppCalculator = () => {
  return (
    <div className="flex flex-col gap-y-2 rounded-lg bg-slate-500 p-2">
      <CalculatorScreen />
      <CalculatorButtonsTable />
    </div>
  );
};

export default AppCalculator;
