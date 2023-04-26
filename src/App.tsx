import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { useState } from "react";
import { themeOne } from "./styles/themes";
import Header from "./components/Header/HeaderComponent";

export default function App() {
  const [selectedTheme, setSelectedTheme] = useState(themeOne);
  console.log(selectedTheme);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}
