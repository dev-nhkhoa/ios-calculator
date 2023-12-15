const NumberButton = ({ number }) => {
  const handleClicked = () => {
    console.log(number);
  };
  return (
    <div
      onClick={() => handleClicked()}
      className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#D4D4D2] text-[36px] font-medium text-white"
    >
      <p>{number}</p>
    </div>
  );
};

const NumberZeroButton = () => {
  const handleClicked = () => {
    console.log();
  };
  return (
    <div
      onClick={() => handleClicked()}
      className="flex h-[64px] w-[138px] items-center justify-start rounded-full bg-[#D4D4D2] pl-4 text-[36px] font-medium text-white"
    >
      <p>0</p>
    </div>
  );
};

const listNumbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

const RenderNumbers = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
        {listNumbers.map((number) => {
          return <NumberButton key={number} number={number} />;
        })}
      </div>
      <div className="mt-4 flex justify-start gap-4">
        <NumberZeroButton />
        <NumberButton number={","} />
      </div>
    </div>
  );
};

export { NumberZeroButton, RenderNumbers };
export default NumberButton;
