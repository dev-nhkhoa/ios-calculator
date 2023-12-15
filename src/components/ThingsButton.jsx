import Button from "./Button";

const RenderThingsButton = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Button value={"AC"} type={"things"} />
      <Button value={"+/-"} type={"things"} />
      <Button value={"%"} type={"things"} />
    </div>
  );
};

export { RenderThingsButton };
