import styled from "styled-components";

export const ShowScreen = styled.article`
  background-color: ${({ theme }) => theme.colors.screen};
  color: ${({ theme }) => theme.colors.screenText};
  display: flex;
  justify-content: flex-end;
  border-radius: 5px;
  font-size: 3.3rem;
  height: 40vh;
  letter-spacing: 1px;
  margin-top: 0.9rem;
  padding: 2.5rem 1.9rem;
`;
