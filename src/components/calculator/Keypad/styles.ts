import styled from "styled-components";

export const PressKeys = styled.article`
  background-color: ${({ theme }) => theme.colors.keypad};
  display: grid;
  row-gap: 1.9rem;
  column-gap: 1.3rem;
  grid-template: repeat(5, 1fr) / repeat(4, 1fr);
  grid-auto-flow: row;
  padding: 2rem;
  border-radius: 5px;
  margin-top: 1.6rem;
  button {
    border-radius: 10px;
  }
`;

export const NumberKeys = styled.button`
  background-color: ${({ theme }) => theme.colors.key};
  box-shadow: 0 4px ${({ theme }) => theme.colors.keyShadow};
  color: ${({ theme }) => theme.colors.keyText};
  padding: 0.8rem 0 0.5rem 0;
  text-align: center;
  border-radius: 10px;
`;

export const OperatorKeys = styled(NumberKeys)``;

export const DeleteKey = styled.button`
  background-color: ${({ theme }) => theme.colors.actionKey};
  box-shadow: 0 4px ${({ theme }) => theme.colors.actionKeyShadow};
  color: ${({ theme }) => theme.colors.actionKeyText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.actionKeyHover};
  }
  font-size: 1.5rem !important;
`;

export const ResetKey = styled(DeleteKey)`
  grid-column: 1 / span 2;
`;

export const EqualsKey = styled(DeleteKey)`
  background-color: ${({ theme }) => theme.colors.equalsKey};
  box-shadow: 0 4px ${({ theme }) => theme.colors.equalsKeyShadow};
  color: ${({ theme }) => theme.colors.equalsKeyText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.equalKeyHover};
  }
  grid-column: 3 / span 2;
`;
