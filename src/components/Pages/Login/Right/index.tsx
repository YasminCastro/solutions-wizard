import { Container, Login, Title, Wrapper } from "./styles";
import { PasswordInput, Button } from "@mantine/core";
import { useState } from "react";
import { BsLockFill } from "react-icons/bs";
import { FaHatWizard } from "react-icons/fa";
import { colors } from "@/styles/GlobalStyles";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import axios from "axios";

const RightSection: React.FC = () => {
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["token"]);

  const [errorMsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (errorMsg) setErrorMsg("");

    try {
      const { data } = await axios.post("/api/auth/login", { password });

      console.log(data);

      if (!data.success) {
        throw new Error(data.message);
      }

      setCookie("token", data.token, {
        path: "/",
        maxAge: data.expiresIn,
        sameSite: true,
      });

      router.push("/dashboard");
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
            value={password}
            onChange={(event) => {
              setPassword(event.currentTarget.value);
            }}
            autoComplete={password.toString()}
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
