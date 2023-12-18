import { NumberAndThingsButton } from "./Button";

const RenderThingsButton = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <NumberAndThingsButton number={"AC"} />
      <NumberAndThingsButton number={"+/-"} />
      <NumberAndThingsButton number={"%"} />
    </div>
  );
};

export { RenderThingsButton };
