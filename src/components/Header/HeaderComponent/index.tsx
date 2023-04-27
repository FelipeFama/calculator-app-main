import { Header } from "./styles";
import ThemeSwitcher from "../ThemeSwitcher";
import { Theme } from "../../../styles/styles";

interface HeaderProps {
  HandleThemeChange: (theme: Theme) => void;
}

export default function HeaderComponent({ HandleThemeChange }: HeaderProps) {
  return (
    <Header>
      <h1>calc</h1>
      <ThemeSwitcher HandleThemeChange={HandleThemeChange} />
    </Header>
  );
}
