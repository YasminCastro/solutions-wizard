import styled from "styled-components";

import GlobalStyle from "@/styles/GlobalStyles";

const Layout: React.FC<any> = ({ children }): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      <MainContainer>{children}</MainContainer>
      {/* <Footer /> */}
    </>
  );
};

const MainContainer = styled.main`
  padding-top: 56px;
`;

export default Layout;
