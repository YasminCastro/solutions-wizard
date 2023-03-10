import { Container, Login, Title, Wrapper } from "./styles";
import { PasswordInput, Button } from "@mantine/core";
import { useState } from "react";
import { BsLockFill } from "react-icons/bs";
import { FaHatWizard } from "react-icons/fa";
import { colors } from "@/styles/GlobalStyles";
import { useRouter } from "next/router";
import { AUTH_CONFIG } from "@/config";

const RightSection: React.FC = () => {
  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState("");
  const [value, setValue] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    console.log("SUBMIT");

    if (errorMsg) setErrorMsg("");

    try {
      console.log("VALUES", AUTH_CONFIG.LOGIN_USERNAME, value);

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: AUTH_CONFIG.LOGIN_USERNAME,
          password: value,
        }),
      });
      console.log(res);

      console.log("res", res);
      if (res.status === 200) {
        router.push({ pathname: "/dashboard" });
      } else {
        // throw new Error(res.);
      }
    } catch (error: any) {
      console.error("An unexpected error happened occurred:", error);
      setErrorMsg(error.message);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Title>
          <FaHatWizard size={48} color={colors.purple1000} />
          <h1>Solutions Wizard</h1>
        </Title>
        <Login>
          <PasswordInput
            error={errorMsg}
            icon={<BsLockFill />}
            placeholder="Insira sua senha mágica..."
            withAsterisk
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
            }}
            autoComplete={value.toString()}
          />
          <Button onClick={handleSubmit} variant="light">
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
