const Button = ({ value, type }) => {
  const bgColor = type === "math" ? "bg-[#FF9500]" : "bg-[#D4D4D2]";
  let width;
  width =
    type === 0
      ? "w-[138px] bg-[#D4D4D2] justify-start pl-4"
      : "w-[64px] justify-center";
  return (
    <button
      className={`${width} ${bgColor} flex h-[64px] items-center rounded-full text-[36px] font-medium text-white`}
    >
      <p>{value}</p>
    </button>
  );
};

export default Button;
