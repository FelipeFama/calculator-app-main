import { Themes } from "./styles";
import ThemeButtons from "../ThemeButtons";

export default function ThemeSwitcher(props: any) {
  return (
    <Themes>
      <p>THEME</p>
      <ThemeButtons HandleThemeChange={props.HandleThemeChange} />
    </Themes>
  );
}
