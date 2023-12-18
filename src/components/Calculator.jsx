import CaclulatorScreen from "./CalculatorScreen";
import CalculatorTable from "./CalculatorTable";
import { useState, createContext } from "react";

export const UserContext = createContext();

// TODO: ADD ANIMATE WHEN CLICK NUMBERS BTN & MATHS BTN
const Calculator = () => {
  const [output, setOutput] = useState(0);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-max max-w-lg flex-col gap-4 rounded-lg bg-[#1C1C1C] p-[10px] text-white">
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
