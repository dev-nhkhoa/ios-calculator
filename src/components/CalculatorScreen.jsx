const CaclulatorScreen = ({ outputText }) => {
  return (
    <h1 className="flex justify-end pt-[70px] text-[36px]">
      {parseFloat(outputText).toLocaleString()}
    </h1>
  );
};

export default CaclulatorScreen;
