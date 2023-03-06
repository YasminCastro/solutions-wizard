import { Container, Wrapper } from "./styles";
import { Input } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { colors } from "@/styles/GlobalStyles";
import { useSoftwares } from "@/providers/softwares";

const TopBarSearchSoftwares: React.FC = () => {
  const { setSearchedSoftware } = useSoftwares();

  return (
    <Wrapper>
      <Container>
        <Input
          variant="filled"
          icon={<BsSearch />}
          placeholder="Procurar..."
          onChange={(event) => {
            setSearchedSoftware(event.currentTarget.value.toLowerCase());
          }}
        />
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

export default TopBarSearchSoftwares;
