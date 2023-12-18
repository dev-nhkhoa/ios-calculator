import { MathsButtons } from "./Button";

const RenderMathButton = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <MathsButtons math={"/"} />
      <MathsButtons math={"*"} />
      <MathsButtons math={"-"} />
      <MathsButtons math={"+"} />
      <MathsButtons math={"="} />
    </div>
  );
};

export { RenderMathButton };
