import { useState, createContext } from "react";
import { AppHeader, AppCalculator } from "./components";

export const UserContext = createContext();

const App = () => {
  return (
    // responsive background
    <div className="flex justify-center">
      <div className="flex w-max max-w-lg flex-col gap-y-4 bg-gray-100 p-4">
        <AppHeader />
        <AppProvider childern={<AppCalculator />} />
      </div>
    </div>
  );
};
export default App;

const AppProvider = ({ childern }) => {
  const [answer, setAnswer] = useState(0);
  const [floatNumber, setFloatNumber] = useState(false);
  const [doMath, setDoMath] = useState();

  return (
    <UserContext.Provider
      value={{
        answer,
        setAnswer,
        doMath,
        setDoMath,
        floatNumber,
        setFloatNumber,
      }}
    >
      {childern}
    </UserContext.Provider>
  );
};
