import { useState } from "react";
import Destructuring from "./components/Destructuring";
import Fetching from "./components/Fetching";
import Finish from "./components/Finish";
import Props from "./components/Props";
import UseEffect from "./components/UseEffect";
import UseState from "./components/UseState";
import UseStateClosure from "./components/UseStateClosure";

function TaskGame() {
  const [stepNumber, setStepNumber] = useState(0);
  const titleStep = [
    "1. Destructuring",
    "2. Props",
    "3. useState",
    "4. useState Closure",
    "5. useEffect",
    "6. Fetching API",
    "Congratulations",
  ];

  return (
    <div>
      <h1>{titleStep[stepNumber]}</h1>
      {stepNumber === 0 ? <Destructuring setStep={setStepNumber} /> : ""}
      {stepNumber === 1 ? <Props setStep={setStepNumber} /> : ""}
      {stepNumber === 2 ? <UseState setStep={setStepNumber} /> : ""}
      {stepNumber === 3 ? <UseStateClosure setStep={setStepNumber} /> : ""}
      {stepNumber === 4 ? <UseEffect setStep={setStepNumber} /> : ""}
      {stepNumber === 5 ? <Fetching setStep={setStepNumber} /> : ""}
      {stepNumber === 6 ? <Finish /> : ""}
    </div>
  );
}

export default TaskGame;
