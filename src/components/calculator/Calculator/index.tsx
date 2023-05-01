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

  return (
    <main>
      <Calculator>
        <Screen />
        <Keypad />
      </Calculator>
    </main>
  );
}
