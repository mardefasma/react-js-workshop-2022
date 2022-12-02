import { Button, Divider } from "antd";
import { useState } from "react";

function UseStateClosure(props) {
  const handleNext = () => {
    props.setStep(4);
  };

  const [count, setCount] = useState(0);

  const handleClickAsync = () => {
    console.log("handlernya sudah onclick");
    setTimeout(() => {
      // TODO: Find the Bugs
      setCount(count=>count + 1);
    }, 1000);
  };

  return (
    <div>
      <p>
        Button ini kalau dispam klik cuma nambah 1, pengennya ya nambah tiap
        spam klik
      </p>
      <Divider />
      <div>
        {count}
        <br />
        <Button type="primary" onClick={handleClickAsync}>
          Tambah angkanya + 1
        </Button>
      </div>
      <Divider />
      <Button onClick={handleNext} type="primary">
        Next?
      </Button>
    </div>
  );
}
export default UseStateClosure;
