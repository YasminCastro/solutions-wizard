import { Container, Login, Title, Wrapper } from "./styles";
import { PasswordInput, Button } from "@mantine/core";
import { useState } from "react";
import { BsLockFill } from "react-icons/bs";
import { FaHatWizard } from "react-icons/fa";
import { colors } from "@/styles/GlobalStyles";

const RightSection: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Wrapper>
      <Container>
        <Title>
          <FaHatWizard size={48} color={colors.purple100} />
          <h1>Solutions Wizard</h1>
        </Title>
        <Login>
          <PasswordInput
            icon={<BsLockFill />}
            placeholder="Insira sua senha mágica..."
            withAsterisk
            value={value}
            onChange={(event) => {
              console.log(event.currentTarget.value);
              setValue(event.currentTarget.value);
            }}
          />
          <Button variant="light">Entrar</Button>
        </Login>
      </Container>
    </Wrapper>
  );
};

export default RightSection;
