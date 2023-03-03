import { Container, Wrapper } from "./styles";
import { IoLogOutOutline, IoArrowBack } from "react-icons/io5";
import { colors } from "@/styles/GlobalStyles";
import { useRouter } from "next/router";

const TopBar: React.FC = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Container>
        <button
          onClick={() => {
            router.push({ pathname: "/dashboard", query: router.query });
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
