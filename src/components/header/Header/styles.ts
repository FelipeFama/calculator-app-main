import styled from "styled-components";

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.headerText};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  width: 538px;
  margin: 0 auto;
  margin-top: 5.5rem;
  padding: 1rem 0;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
