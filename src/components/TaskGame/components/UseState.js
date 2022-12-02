import { Button, Divider } from "antd";

function UseState(props) {
  const handleNext = () => {
    props.setStep(3);
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
