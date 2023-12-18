import { useContext } from "react";
import { ButtonClicked } from "../lib/ButtonClicked";
import { UserContext } from "./Calculator";

export const NumberAndThingsButton = ({ number }) => {
  const { setOutput, output } = useContext(UserContext);
  let width;
  width =
    number === 0 ? "w-[138px] justify-start pl-4" : "w-[64px] justify-center";
  return (
    <button
      onClick={() => {
        ButtonClicked(number, setOutput, output);
      }}
      className={`${width} flex h-[64px] items-center rounded-full bg-[#D4D4D2] text-[36px] font-medium text-white active:bg-gray-500`}
    >
      <p>{number}</p>
    </button>
  );
};

export const MathsButtons = ({ math }) => {
  const { setOutput, output } = useContext(UserContext);
  return (
    <button
      onClick={() => {
        ButtonClicked(math, setOutput, output);
      }}
      className={
        "flex h-[64px] w-[64px] transform items-center justify-center rounded-full bg-[#FF9500] text-[36px] font-medium text-white transition duration-200 ease-in-out focus:border-blue-300 focus:bg-white focus:text-gray-500 focus:outline-none"
      }
    >
      <p>{math}</p>
    </button>
  );
};
