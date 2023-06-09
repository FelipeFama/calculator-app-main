import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --main-font: "League Spartan", sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  -ms-overflow-style: none; 
  scrollbar-width: none; 
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: var(--main-font);
}

body::-webkit-scrollbar {
  display: none; 
}

.theme-btn.active {
    background-color: ${({ theme }) => theme.colors.equalsKey};
    &:hover {
      background-color: ${({ theme }) => theme.colors.equalKeyHover};
    }
  }
`;
