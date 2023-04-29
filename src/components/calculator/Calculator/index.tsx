import React from "react";
import { Calculator } from "./styles";
import { Screen } from "../Screen";
import { Keypad } from "../Keypad";

export default function CalculatorComponent() {
  return (
    <main>
      <Calculator>
        <Screen />
        <Keypad />
      </Calculator>
    </main>
  );
}
