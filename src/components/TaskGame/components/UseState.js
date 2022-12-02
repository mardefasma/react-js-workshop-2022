import { Button, Divider } from "antd";

function UseState(props) {
  const handleNext = () => {
    // TODO: Find the Bugs
    props.setStep(1);
  };

  return (
    <div>
      <p>
        Button dibawah ini kalau diklik balik ke 2. Props. Pengennya sih ke
        nomor 4
      </p>
      <Divider />
      <Button onClick={handleNext} type="primary">
        Next?
      </Button>
    </div>
  );
}
export default UseState;
