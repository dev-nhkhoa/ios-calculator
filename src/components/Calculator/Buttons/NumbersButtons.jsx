const NumbersButtons = () => {
  //TODO: OPTIMIZE THIS CODE
  return (
    <div className="grid grid-cols-3 gap-2">
      <NumButton name={7} />
      <NumButton name={8} />
      <NumButton name={9} />
      <NumButton name={4} />
      <NumButton name={5} />
      <NumButton name={6} />
      <NumButton name={1} />
      <NumButton name={2} />
      <NumButton name={3} />
      {/*TODO: span 0 number  */}
      <div className="col-span-2">
        <NumButton name={0} />
      </div>
      <FloatButton />
    </div>
  );
};

const NumButton = ({ name }) => {
  const NumberButtonClicked = () => {};

  return (
    <button
      onClick={() => NumberButtonClicked()}
      className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#333333] text-center font-bold text-white active:bg-[#A5A5A5] active:font-extrabold"
    >
      {name}
    </button>
  );
};

const FloatButton = () => {
  const floatButtonClicked = () => {};
  return <NumButton name={"."} handleClicked={() => floatButtonClicked()} />;
};

export default NumbersButtons;
