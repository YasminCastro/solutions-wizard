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

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .categories-tags {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 12px;
  }

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
`;

export const TagsButtons = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;

  align-items: center;

  border-bottom: 1px solid ${colors.lightGrey};

  button {
    color: ${colors.black};
    background: transparent;

    font-weight: 200;
    font-size: 14px;
  }

  .mantine-Button-root:hover {
    background: ${colors.lightGrey};
  }

  button:hover {
    background: ${colors.lightGrey};
  }
`;
