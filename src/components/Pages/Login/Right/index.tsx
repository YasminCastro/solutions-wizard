import { Container, Login, Title, Wrapper } from "./styles";
import { PasswordInput, Button } from "@mantine/core";
import { useState } from "react";
import { BsLockFill } from "react-icons/bs";
import { FaHatWizard } from "react-icons/fa";
import { colors } from "@/styles/GlobalStyles";
import { useRouter } from "next/router";
import { truncate } from "fs";

const RightSection: React.FC = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  return (
    <Wrapper>
      <Container>
        <Title>
          <FaHatWizard size={48} color={colors.purple1000} />
          <h1>Solutions Wizard</h1>
        </Title>
        <Login>
          <PasswordInput
            icon={<BsLockFill />}
            placeholder="Insira sua senha mágica..."
            withAsterisk
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
            }}
            autoComplete={value.toString()}
          />
          <Button
            onClick={() => {
              router.push("/dashboard");
            }}
            variant="light"
          >
            Entrar
          </Button>
        </Login>
        <p>
          Developer by{" "}
          <a
            href="https://www.linkedin.com/in/yasmin-castro-b579451b8"
            target="_blank"
          >
            Yas Castro
          </a>
        </p>
      </Container>
    </Wrapper>
  );
};

export default RightSection;
