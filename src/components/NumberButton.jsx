import Button from "./Button";

const RenderNumbers = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
        <Button value={7} type={"number"} />
        <Button value={8} type={"number"} />
        <Button value={9} type={"number"} />
        <Button value={4} type={"number"} />
        <Button value={5} type={"number"} />
        <Button value={6} type={"number"} />
        <Button value={1} type={"number"} />
        <Button value={2} type={"number"} />
        <Button value={3} type={"number"} />
      </div>
      <div className="mt-4 flex justify-start gap-4">
        <Button value={0} type={0} />
        <Button value={","} type={"things"} />
      </div>
    </div>
  );
};

export { RenderNumbers };
