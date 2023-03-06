import styled from "styled-components";

import GlobalStyle from "@/styles/GlobalStyles";
import LeftPanel from "@/components/Global/LeftPanel";
import { useRouter } from "next/router";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <GlobalStyle />
      {router.route !== "/" && <LeftPanel />}
      <MainContainer>{children}</MainContainer>
    </>
  );
};

const MainContainer = styled.main``;

export default Layout;
