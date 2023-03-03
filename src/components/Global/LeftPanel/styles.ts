import { LEFT_PANEL_WIDTH } from "@/config";
import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${LEFT_PANEL_WIDTH}px;
  position: fixed;
  height: 100%;
`;

export const Title = styled.p`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: baseline;

  gap: 8px;

  font-size: 18px;
  line-height: 20px;

  svg {
    margin-right: 6px;
  }
`;

export const OptionsButtons = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  .mantine-NavLink-root {
    background: ${colors.purple100};
    border-radius: 6px;
    color: ${colors.purple1000};
    font-weight: 700;
    font-size: 18px;

    width: 200px;
  }

  .mantine-NavLink-label {
    font-size: 18px;
  }
`;

export const SoftwaresOptions = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;

  .mantine-NavLink-root {
    color: ${colors.grey50};
    border-radius: 6px;
    font-weight: 400;
    font-size: 16px;

    width: 200px;

    :hover {
      background: ${colors.purpleLight50};
    }
  }

  .mantine-NavLink-label {
    font-size: 16px;
  }
`;

export const Software = styled.div<{ active: true }>`
  .mantine-NavLink-root {
    color: ${(props) => (props.active ? colors.purple800 : colors.grey50)};
  }
`;
