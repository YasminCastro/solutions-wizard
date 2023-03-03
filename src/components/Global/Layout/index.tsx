import styled from "styled-components";

import GlobalStyle from "@/styles/GlobalStyles";
import LeftPanel from "@/components/Global/LeftPanel";
import { useRouter } from "next/router";
import { Software } from "@prisma/client";

interface IProps {
  children: React.ReactNode;
  softwares?: Software[];
}

const Layout: React.FC<IProps> = ({ children, softwares }): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      {router.route !== "/" && <LeftPanel softwares={softwares} />}

      <MainContainer>{children}</MainContainer>
      {/* <Footer /> */}
    </>
  );
};

const MainContainer = styled.main``;

export default Layout;
