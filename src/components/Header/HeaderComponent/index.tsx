import React from "react";
import { Header } from "./styles";
import ThemeSwitcher from "../ThemeSwitcher";

export default function HeaderComponent() {
  return (
    <Header>
      <h1>calc</h1>
      <ThemeSwitcher />
    </Header>
  );
}
