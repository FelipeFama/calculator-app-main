import { ThemeButton, ThemeToggle, ThemeValue } from "./styles";
import { themeOne, themeThree, themeTwo } from "../../../styles/themes";
import ThemeNumbers from "../ThemeNumbers";

export default function ThemeButtons(props: any) {
  return (
    <ThemeToggle>
      <ThemeNumbers />
      <ThemeValue>
        <ThemeButton
          aria-label="basic"
          className="theme-btn basic active"
          onClick={(e) => props.HandleThemeChange(themeOne, e)}
        ></ThemeButton>

        <ThemeButton
          aria-label="light"
          className="theme-btn light"
          onClick={(e) => props.HandleThemeChange(themeTwo, e)}
        ></ThemeButton>

        <ThemeButton
          aria-label="dark"
          className="theme-btn dark"
          onClick={(e) => props.HandleThemeChange(themeThree, e)}
        ></ThemeButton>
      </ThemeValue>
    </ThemeToggle>
  );
}
