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
  gap: 200px;
  align-items: center;

  p {
    margin: 16px;
    position: absolute;
    bottom: 0;
    right: 0;
    color: ${colors.grey50};
  }

  a {
    color: ${colors.purple800};
  }
`;

export const Title = styled.div`
  margin-top: 126px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 58px;
  }

  @media (max-width: 1300px) {
    h1 {
      font-size: 48px;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 38px;
    }
  }
`;

export const Login = styled.form`
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  button {
    color: ${colors.purple1000};
    background: ${colors.purple100};
  }

  .mantine-Button-root:hover {
    background: ${colors.purple300};
  }

  button:hover {
    background: ${colors.purple300};
  }

  @media (max-width: 1200px) {
    max-width: 400px;
  }

  @media (max-width: 900px) {
    max-width: 300px;
  }
`;
