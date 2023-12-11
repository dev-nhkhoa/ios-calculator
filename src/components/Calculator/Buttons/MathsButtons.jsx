const MathsButtons = () => {
  const MathButtonClicked = (math) => {};

  const CalculateMath = () => {};

  return (
    <div className="grid grid-cols-1 gap-2">
      <MathButton name={"/"} handleClicked={() => MathButtonClicked("/")} />
      <MathButton name={"*"} handleClicked={() => MathButtonClicked("*")} />
      <MathButton name={"+"} handleClicked={() => MathButtonClicked("+")} />
      <MathButton name={"-"} handleClicked={() => MathButtonClicked("-")} />
      <MathButton name={"="} handleClicked={() => CalculateMath()} />
    </div>
  );
};

const MathButton = ({ name, handleClicked }) => {
  return (
    <button
      onClick={handleClicked}
      className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#FF9F0A] text-center font-bold text-white active:font-extrabold"
    >
      {name}
    </button>
  );
};

export default MathsButtons;
