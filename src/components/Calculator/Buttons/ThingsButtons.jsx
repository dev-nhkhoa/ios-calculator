const ThingsButtons = () => {
  return (
    <>
      <ClearAllButton />
      <ReverseMathButton />
      <PercentageButton />
    </>
  );
};

const ClearAllButton = () => {
  const resetAll = () => {};

  return <ThingsButton name={"AC"} handleClicked={() => resetAll()} />;
};

const ReverseMathButton = () => {
  const toReverse = () => {};

  return <ThingsButton name={"+/-"} handleClicked={() => toReverse()} />;
};

const PercentageButton = () => {
  const toPercentage = () => {};
  return <ThingsButton name={"%"} handleClicked={() => toPercentage()} />;
};

const ThingsButton = ({ name, handleClicked }) => {
  return (
    <button
      onClick={handleClicked}
      className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#A5A5A5] text-center font-bold text-white active:font-extrabold"
    >
      {name}
    </button>
  );
};

export default ThingsButtons;
