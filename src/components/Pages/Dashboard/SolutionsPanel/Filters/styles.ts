import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px 6px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Solution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .solution-chips {
    display: flex;
    gap: 4px;
  }

  p {
    margin-bottom: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.grey50};
  }
`;
