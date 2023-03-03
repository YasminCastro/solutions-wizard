import { Container, Wrapper } from "./styles";
import { Input } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { colors } from "@/styles/GlobalStyles";

const RightSection: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Input icon={<BsSearch />} placeholder="Procurar..." />
        <button
          onClick={() => {
            console.log("SAIR");
          }}
        >
          <IoLogOutOutline size={36} />
        </button>
      </Container>
    </Wrapper>
  );
};

export default RightSection;
