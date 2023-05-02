import styled from "styled-components";

export const ThemeToggle = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-weight: 0.9rem;
`;

export const ThemeValue = styled.section`
  background-color: ${({ theme }) => theme.colors.keypad};
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-radius: 15px;
  padding: 5px 3px;
  width: 60px;
  max-width: 100%;
`;

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  width: 1rem;
  height: 0.8rem;
  cursor: pointer;
`;
