import { Container, Wrapper } from "./styles";
import { Input } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { colors } from "@/styles/GlobalStyles";

const TopBar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Input variant="filled" icon={<BsSearch />} placeholder="Procurar..." />
        <button
          onClick={() => {
            console.log("SAIR");
          }}
        >
          <IoLogOutOutline color={colors.grey50} size={30} />
        </button>
      </Container>
    </Wrapper>
  );
};

export default TopBar;
