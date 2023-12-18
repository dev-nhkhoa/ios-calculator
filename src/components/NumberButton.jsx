import { NumberAndThingsButton } from "./Button";

const RenderNumbers = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
        <NumberAndThingsButton number={7} />
        <NumberAndThingsButton number={8} />
        <NumberAndThingsButton number={9} />
        <NumberAndThingsButton number={4} />
        <NumberAndThingsButton number={5} />
        <NumberAndThingsButton number={6} />
        <NumberAndThingsButton number={1} />
        <NumberAndThingsButton number={2} />
        <NumberAndThingsButton number={3} />
      </div>
      <div className="mt-4 flex justify-start gap-4">
        <NumberAndThingsButton number={0} />
        <NumberAndThingsButton number={","} />
      </div>
    </div>
  );
};

export { RenderNumbers };
