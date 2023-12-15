import Button from "./Button";

const listMaths = ["/", "*", "-", "+", "="];

const RenderMathButton = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {listMaths.map((math) => {
        return (
          <Button key={listMaths.indexOf(math)} value={math} type={"math"} />
        );
      })}
    </div>
  );
};

export { RenderMathButton };
