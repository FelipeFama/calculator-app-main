import React from "react";
import { Themes } from "./styles";
import ThemeButtons from "../ThemeButtons";

export default function ThemeSwitcher() {
  return (
    <Themes>
      <p>THEME</p>
      <ThemeButtons />
    </Themes>
  );
}
