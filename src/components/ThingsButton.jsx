import Button from "./Button";

const listThings = ["AC", "+/-", "%"];

const RenderThingsButton = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {listThings.map((item) => {
        return (
          <Button key={listThings.indexOf(item)} value={item} type={"things"} />
        );
      })}
    </div>
  );
};

export { RenderThingsButton };
