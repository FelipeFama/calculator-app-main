import { forwardRef } from "react";
import { ShowScreen } from "./styles";

interface ScreenProps {
  calc?: string;
}

export const Screen = forwardRef<HTMLParagraphElement, ScreenProps>(
  (props, ref) => {
    return (
      <ShowScreen>
        <p ref={ref}>{props.calc || "0"}</p>
      </ShowScreen>
    );
  }
);
