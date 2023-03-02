import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 60%;
  height: 100vh;
  right: 0px;
  position: absolute;
  top: 0px;

  overflow: hidden;

  @media (max-width: 1500px) {
    width: 50%;
  }
`;

export const Container = styled.div`
  height: 100%;

  width: 100%;

  background: ${colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px 0px 0px 24px;

  display: flex;
  flex-direction: column;
  gap: 300px;
  align-items: center;
`;

export const Title = styled.div`
  margin-top: 126px;
  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Login = styled.form`
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;

  button {
    color: ${colors.purple100};
    background: ${colors.purple0};
  }

  .mantine-Button-root:hover {
    background: ${colors.purple20};
  }

  button:hover {
    background: ${colors.purple20};
  }

  @media (max-width: 1200px) {
    max-width: 400px;
  }
  @media (max-width: 900px) {
    max-width: 300px;
  }
`;
