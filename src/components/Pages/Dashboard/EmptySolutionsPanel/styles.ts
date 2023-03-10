import { LEFT_PANEL_WIDTH } from "@/config";
import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: ${LEFT_PANEL_WIDTH}px;
  background: ${colors.lightGrey};
  height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* height: calc(100vh - 75px); */

  overflow: hidden;
`;

export const ContentWrapper = styled.section`
  margin: 86px 20px 0 20px;
  padding: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
  border-radius: 14px;

  background: ${colors.white};

  h1 {
    margin: 8px 24px;
    font-weight: 700;
    font-size: 24px;
  }

  hr {
    height: 1px;
    background-color: ${colors.lightGrey};
    border: none;
  }
`;

export const SoftwaresButtons = styled.div`
  margin-top: 16px;
  button {
    margin: 16px;
    background: ${colors.purple900};
  }

  .mantine-Button-root {
    :hover {
      background: ${colors.purple1000};
    }
  }
`;
