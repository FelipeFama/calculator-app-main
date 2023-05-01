import { Calculator } from "./styles";
import { Screen } from "../Screen";
import { Keypad } from "../Keypad";
import { useEffect, useRef, useState } from "react";

export default function CalculatorComponent() {
  const [calc, setCalc] = useState<string>("");
  const [calculated, setCalculated] = useState<boolean>(false);
  const operations = ["/", "*", "+", "-", "."];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const ref = useRef<HTMLDivElement>(null);

  const updateCalc = (value: string) => {
    if (calculated === true && operations.includes(value)) {
      setCalculated(false);
    } else if (calculated === true && !operations.includes(value)) {
      setCalculated(false);
      return setCalc(value);
    } else if (calculated === true && value === "0") {
      setCalculated(false);
      return setCalc("");
    }

    setCalc(calc + value);
  };

  const calculate = () => {
    setCalculated(true);
    setCalc(eval(calc).toString());
  };

  const clear = () => {
    setCalc("");
  };

  const del = () => {
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const handleKeyDown = () => {
    document.addEventListener("keydown", onKeyDown);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (operations.includes(e.key) || numbers.includes(e.key)) {
      updateCalc(e.key);
    } else if (e.key === "Enter" || e.key === "=") {
      calculate();
    } else if (e.key === "Backspace") del();
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <main>
      <Calculator>
        <Screen ref={ref} calc={calc} />
        <Keypad
          updateCalc={updateCalc}
          calculate={calculate}
          del={del}
          clear={clear}
          onKeyDown={handleKeyDown}
        />
      </Calculator>
    </main>
  );
}
