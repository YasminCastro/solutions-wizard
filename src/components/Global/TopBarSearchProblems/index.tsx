import { useCookies } from "react-cookie";
import { Input } from "@mantine/core";
import { IoSearch } from "react-icons/io5";

import { Container, Wrapper } from "./styles";
import LogoutButton from "../LogoutButton";

const TopBarSearchProblems: React.FC = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);

  return (
    <Wrapper>
      <Container>
        <Input variant="filled" icon={<IoSearch />} placeholder="Procurar..." />
        <LogoutButton />
      </Container>
    </Wrapper>
  );
};

export default TopBarSearchProblems;
