import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;

  overflow: hidden;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  img {
    object-position: 0px -70px;
  }

  @media (max-width: 1600px) {
    img {
      object-position: -50px -70px;
    }
  }

  @media (max-width: 900px) {
    img {
      object-position: -70px -70px;
    }
  }
`;
