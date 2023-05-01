import styled from "styled-components";

export const Calculator = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 100%;
  width: 538px;
  margin-bottom: 5rem;
  * {
    transition: background-color 1s, color 0.1s ease-in-out;
  }
  button {
    border: none;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
