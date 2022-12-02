import { Button, Divider } from "antd";
import { useEffect, useState } from "react";

function UseEffect(props) {
  const handleNext = () => {
    props.setStep(5);
  };

  const [count, setCount] = useState(0);

  // TODO: Find the Bugs
  useEffect(() => {
    setCount(Math.random);
  }, []);

  return (
    <div>
      <p>Njir infinite loop, pengennya cuma random sekali aja</p>
      <Divider />
      <div>{count}</div>
      <Divider />
      <Button onClick={handleNext} type="primary">
        Next?
      </Button>
    </div>
  );
}

export default UseEffect;
