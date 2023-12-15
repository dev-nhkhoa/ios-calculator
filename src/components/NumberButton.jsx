import Button from "./Button";

const listNumbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

const RenderNumbers = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
        {listNumbers.map((number) => {
          return <Button key={number} value={number} type={"number"} />;
        })}
      </div>
      <div className="mt-4 flex justify-start gap-4">
        <Button value={0} type={0} />
        <Button value={","} type={"things"} />
      </div>
    </div>
  );
};

export { RenderNumbers };
