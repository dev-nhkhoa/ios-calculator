import Button from "./Button";

const RenderMathButton = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Button value={"/"} type={"math"} />
      <Button value={"*"} type={"math"} />
      <Button value={"-"} type={"math"} />
      <Button value={"+"} type={"math"} />
      <Button value={"="} type={"math"} />
    </div>
  );
};

export { RenderMathButton };
