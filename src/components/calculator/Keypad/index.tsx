import React from "react";
import {
  DeleteKey,
  EqualsKey,
  NumberKeys,
  OperatorKeys,
  PressKeys,
  ResetKey,
} from "./styles";

export function Keypad() {
  return (
    <PressKeys>
      <NumberKeys value="7">7</NumberKeys>
      <NumberKeys value="8">8</NumberKeys>
      <NumberKeys value="9">9</NumberKeys>
      <DeleteKey>DEL</DeleteKey>
      <NumberKeys value="4">4</NumberKeys>
      <NumberKeys value="5">5</NumberKeys>
      <NumberKeys value="6">6</NumberKeys>
      <OperatorKeys value="+">+</OperatorKeys>
      <NumberKeys value="1">1</NumberKeys>
      <NumberKeys value="2">2</NumberKeys>
      <NumberKeys value="3">3</NumberKeys>
      <OperatorKeys value="-">-</OperatorKeys>
      <NumberKeys value=".">.</NumberKeys>
      <NumberKeys value="0">0</NumberKeys>
      <OperatorKeys value="/">/</OperatorKeys>
      <OperatorKeys value="x">x</OperatorKeys>
      <ResetKey value="reset">RESET</ResetKey>
      <EqualsKey value="=">=</EqualsKey>
    </PressKeys>
  );
}
