import { useState } from "react";
import axios from "axios";
import moment from "moment";
import { useForm } from "@mantine/form";
import { Button, Table, TextInput } from "@mantine/core";
import { FaTrash } from "react-icons/fa";

import { useSoftwares } from "@/providers/softwares";
import { Container, ContentWrapper, TableContainer, Wrapper } from "./styles";
import { colors } from "@/styles/GlobalStyles";

const SoftwareForm: React.FC = () => {
  const { softwares, setRefreshSoftwares, setSoftwares } = useSoftwares();
  const [createSoftwareLoading, setCreateSoftwareLoading] = useState(false);
  const [deleteSoftwareLoading, setDeleteSoftwareLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
    },

    validate: {
      name: (value) => (value.length > 2 ? null : "Nome inválido"),
    },
  });

  const rows = softwares.map((element) => (
    <tr key={element.id}>
      <td>{element.name}</td>
      <td>{moment(element.createdAt).format("DD/MM/YYYY")}</td>

      <td>
        <Button
          variant="subtle"
          onClick={() => handleDelete(element.id)}
          disabled={deleteSoftwareLoading}
          sx={{ "&[data-disabled]": { pointerEvents: "all" } }}
          compact
        >
          <FaTrash size={18} color={colors.black} />
        </Button>
      </td>
    </tr>
  ));

  const handleSubmit = async (values: { name: string }) => {
    setCreateSoftwareLoading(true);
    try {
      await axios.post("/api/softwares/create", {
        name: values.name,
      });
      setRefreshSoftwares(`create-${moment().format()}`);
    } catch (error) {
      console.log(error);
    } finally {
      setCreateSoftwareLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    setDeleteSoftwareLoading(true);
    try {
      const index = softwares.findIndex((x) => x.id === id);
      softwares.splice(index, 1);
      setSoftwares(softwares);

      await axios.post("/api/softwares/delete", {
        id,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteSoftwareLoading(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <h1>Criar novo software</h1>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Nome"
              placeholder="Veeam"
              {...form.getInputProps("name")}
              autoFocus
            />

            <Button type="submit" loading={createSoftwareLoading}>
              Salvar
            </Button>
          </form>
        </ContentWrapper>
        <ContentWrapper>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Criado em</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </TableContainer>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default SoftwareForm;
