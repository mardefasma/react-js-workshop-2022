import { Button, Divider } from "antd";

function UseState(props) {
  const handleNext = () => {
    // TODO: Find the Bugs (Solved)
    // Note: Next step of this page (index 2) is page index 3 not 1
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
