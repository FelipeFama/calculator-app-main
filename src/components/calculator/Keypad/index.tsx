import {
  DeleteKey,
  EqualsKey,
  NumberKeys,
  OperatorKeys,
  PressKeys,
  ResetKey,
} from "./styles";

interface KeypadProps {
  updateCalc: (value: string) => void;
  del: () => void;
  clear: () => void;
  calculate: () => void;
}

export const Keypad = (props: KeypadProps) => {
  return (
    <PressKeys>
      <NumberKeys
        value="7"
        onClick={() => {
          props.updateCalc("7");
        }}
      >
        7
      </NumberKeys>
      <NumberKeys
        value="8"
        onClick={() => {
          props.updateCalc("8");
        }}
      >
        8
      </NumberKeys>
      <NumberKeys
        value="9"
        onClick={() => {
          props.updateCalc("9");
        }}
      >
        9
      </NumberKeys>
      <DeleteKey>DEL</DeleteKey>
      <NumberKeys
        value="4"
        onClick={() => {
          props.updateCalc("4");
        }}
      >
        4
      </NumberKeys>
      <NumberKeys
        value="5"
        onClick={() => {
          props.updateCalc("5");
        }}
      >
        5
      </NumberKeys>
      <NumberKeys
        value="6"
        onClick={() => {
          props.updateCalc("6");
        }}
      >
        6
      </NumberKeys>
      <OperatorKeys
        value="+"
        onClick={() => {
          props.updateCalc("+");
        }}
      >
        +
      </OperatorKeys>
      <NumberKeys
        value="1"
        onClick={() => {
          props.updateCalc("1");
        }}
      >
        1
      </NumberKeys>
      <NumberKeys
        value="2"
        onClick={() => {
          props.updateCalc("2");
        }}
      >
        2
      </NumberKeys>
      <NumberKeys
        value="3"
        onClick={() => {
          props.updateCalc("3");
        }}
      >
        3
      </NumberKeys>
      <OperatorKeys
        value="-"
        onClick={() => {
          props.updateCalc("-");
        }}
      >
        -
      </OperatorKeys>
      <NumberKeys
        value="."
        onClick={() => {
          props.updateCalc(".");
        }}
      >
        .
      </NumberKeys>
      <NumberKeys
        value="0"
        onClick={() => {
          props.updateCalc("0");
        }}
      >
        0
      </NumberKeys>
      <OperatorKeys
        value="/"
        onClick={() => {
          props.updateCalc("/");
        }}
      >
        /
      </OperatorKeys>
      <OperatorKeys
        value="x"
        onClick={() => {
          props.updateCalc("*");
        }}
      >
        x
      </OperatorKeys>
      <ResetKey value="reset" onClick={props.clear}>
        RESET
      </ResetKey>
      <EqualsKey value="=" onClick={props.calculate}>
        =
      </EqualsKey>
    </PressKeys>
  );
};
