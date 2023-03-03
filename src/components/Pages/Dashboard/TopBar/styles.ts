import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Wrapper = styled.section``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 250px);
  height: 57px;

  position: fixed;
  left: 0;

  z-index: 9;

  padding: 8px 24px;
  margin-left: 250px;

  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);

  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 0;

    top: 57px;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 16px;
      line-height: 21px;
    }
  }
`;
