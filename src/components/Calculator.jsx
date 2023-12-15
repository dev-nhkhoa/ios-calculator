import CaclulatorScreen from "./CalculatorScreen";
import CalculatorTable from "./CalculatorTable";
import { useState, createContext } from "react";

export const UserContext = createContext();

const Calculator = () => {
  const [output, setOutput] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="flex w-max max-w-lg flex-col gap-4 bg-[#1C1C1C] text-white">
        <CaclulatorScreen outputText={output} />
        <UserContext.Provider
          value={{
            setOutput,
            output,
          }}
        >
          <CalculatorTable />
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default Calculator;
