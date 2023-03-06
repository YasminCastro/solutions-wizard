import { LEFT_PANEL_WIDTH } from "@/config";
import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Wrapper = styled.section``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.white};

  justify-content: space-between;

  width: calc(100% - 250px);
  height: 57px;

  position: fixed;
  left: 0;

  z-index: 10;

  padding: 8px 24px;
  margin-left: ${LEFT_PANEL_WIDTH}px;

  .mantine-Input-wrapper {
    max-width: 700px;
    width: 100%;
  }
`;
