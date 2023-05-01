import { Calculator } from "./styles";
import { Screen } from "../Screen";
import { Keypad } from "../Keypad";
import { useRef, useState } from "react";

export default function CalculatorComponent() {
  const [calc, setCalc] = useState<string>("");
  const [calculated, setCalculated] = useState<boolean>(false);
  const operations = ["/", "*", "+", "-", "."];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const ref = useRef<HTMLDivElement>(null);

  const updateCalc = (value: string) => {
    const displayValue = ref.current;

    if (value === "0" && calc === "0") {
      return clear;
    } else if (
      (operations.includes(value) && calc === "") ||
      (operations.includes(value) && operations.includes(calc.slice(-1)))
    ) {
      return;
    } else if (!operations.includes(value)) {
      setCalc((+calc + +value).toString());

      if (calc.length > 7) {
        displayValue!.style.fontSize = "2.5rem";
      }
      if (calc.length === 11 && !operations.includes(value)) {
        displayValue!.style.width = "fit-content";
        displayValue!.style.overflow = "hidden";
        return console.log(setCalc(calc.toString()));
      } else if (calc.length === 11 && operations.includes(value)) {
        console.log("hello");
      }
    }

    if (calculated === true && operations.includes(value)) {
      setCalculated(false);
    }
  };

  const calculate = () => {
    if (eval(calc) === undefined) {
      return;
    }
    setCalculated(true);
    setCalc(eval(calc).toString());
  };

  const clear = () => {
    setCalculated(false);
    setCalc("");
  };

  const del = () => {
    if (calc === "") {
      return;
    }
    const displayValue = ref.current;
    if (calc.length < 7) {
      displayValue!.style.fontSize = "3.3rem";
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <main>
      <Calculator>
        <Screen ref={ref} calc={calc} />
        <Keypad
          updateCalc={updateCalc}
          calculate={calculate}
          del={del}
          clear={clear}
        />
      </Calculator>
    </main>
  );
}
