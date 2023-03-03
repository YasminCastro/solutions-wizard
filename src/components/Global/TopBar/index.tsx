import { Container, Wrapper } from "./styles";
import { IoLogOutOutline, IoArrowBack } from "react-icons/io5";
import { colors } from "@/styles/GlobalStyles";

const TopBar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <button
          onClick={() => {
            console.log("VOLTAR");
          }}
        >
          <IoArrowBack color={colors.grey50} size={26} />
        </button>
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
