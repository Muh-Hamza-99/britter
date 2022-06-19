import styled from "styled-components";

const SignUp = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > form {
    background: ${({ theme }) => theme.elevation_1};
    border-radius: 5px;
    height: 400px;
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: ${({ theme }) => theme.shadow};
    text-align: center;
    h1 {
      font-family: "Pacifico", cursive;
    }
  }
`;

export const SignUpButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.3rem;
  width: 90%;
  max-width: 250px;
  height: 15%;
  border-radius: 3px;
  appearance: none;
  --moz-appearance: none;
  --webkit-appearance: none;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
  &:active {
      transform: scale(0.98);
  }
  &:focus, &:hover {
    --moz-appearance: none;
    --webkit-appearance: none;
    border: none;
    outline: none;
  }
`;

export default SignUp;