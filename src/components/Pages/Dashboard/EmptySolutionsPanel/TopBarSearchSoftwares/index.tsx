import { Container, Wrapper } from "./styles";
import { Input } from "@mantine/core";
import { IoSearch } from "react-icons/io5";

import { useSoftwares } from "@/providers/softwares";

import LogoutButton from "@/components/Global/LogoutButton";

const TopBarSearchSoftwares: React.FC = () => {
  const { setSearchedSoftware } = useSoftwares();

  return (
    <Wrapper>
      <Container>
        <Input
          variant="filled"
          icon={<IoSearch />}
          placeholder="Procurar..."
          onChange={(event) => {
            setSearchedSoftware(event.currentTarget.value.toLowerCase());
          }}
        />
        <LogoutButton />
      </Container>
    </Wrapper>
  );
};

export default TopBarSearchSoftwares;
