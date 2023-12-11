import { useContext } from "react";
import { UserContext } from "../../App";

const CalculatorScreen = () => {
  const { answer } = useContext(UserContext);

  return (
    <div className="flex h-[36px] w-full items-center justify-end rounded-lg bg-gray-200 text-[24px] font-bold text-black">
      {answer}
    </div>
  );
};

export default CalculatorScreen;
