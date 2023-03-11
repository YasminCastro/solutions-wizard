import { Container, Login, Title, Wrapper } from "./styles";
import { PasswordInput, Button, Input } from "@mantine/core";
import { useState } from "react";
import { BsLockFill, BsPencil } from "react-icons/bs";
import { FaHatWizard } from "react-icons/fa";
import { colors } from "@/styles/GlobalStyles";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useForm } from "@mantine/form";

const RightSection: React.FC = () => {
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["token"]);

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },

    validate: {
      username: (value) =>
        value.length > 1 ? null : "O campo não pode estar vazio.",
      password: (value) =>
        value.length > 1 ? null : "O campo não pode estar vazio.",
    },
  });

  const handleSubmit = async (values: any) => {
    try {
      const { data } = await axios.post("/api/auth/login", values);

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
      if (error.message === "Usuário não encontrado!") {
        form.setErrors({ username: error.message });
      } else {
        form.setErrors({ password: error.message });
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>
          <FaHatWizard size={48} color={colors.purple1000} />
          <h1>Solutions Wizard</h1>
        </Title>
        <Login onSubmit={form.onSubmit(handleSubmit)}>
          <Input
            icon={<BsPencil />}
            placeholder="Usuário"
            autoFocus
            {...form.getInputProps("username")}
          />
          <PasswordInput
            icon={<BsLockFill />}
            placeholder="Insira sua senha mágica..."
            withAsterisk
            {...form.getInputProps("password")}
          />
          <Button className="save-button" type="submit" variant="light">
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
