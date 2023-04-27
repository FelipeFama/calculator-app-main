import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { useState } from "react";
import { themeOne } from "./styles/themes";
import Header from "./components/Header/HeaderComponent";

export default function App() {
  const [selectedTheme, setSelectedTheme] = useState(themeOne);

  const HandleThemeChange = (theme: typeof themeOne): void => {
    setSelectedTheme(theme);
    toggleActiveTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  function toggleActiveTheme(theme: typeof themeOne) {
    const themeBtns = document.querySelectorAll(".theme-btn");
    themeBtns.forEach((themeBtn) => {
      if (themeBtn.classList.contains(theme.name)) {
        themeBtn.classList.add("active");
      } else {
        themeBtn.classList.remove("active");
      }
    });
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Header HandleThemeChange={HandleThemeChange} />
    </ThemeProvider>
  );
}
