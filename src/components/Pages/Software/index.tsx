import { Container, ContentWrapper, TableContainer, Wrapper } from "./styles";
import { useForm } from "@mantine/form";
import { Button, Table, TextInput } from "@mantine/core";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { useSoftwares } from "@/providers/softwares";

const SoftwareForm: React.FC = () => {
  const { softwares } = useSoftwares();
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
      <td>{element.createdAt}</td>

      <td>
        <button onClick={() => handleDelete(element.id)}>
          <FaTrash size={18} />
        </button>
      </td>
    </tr>
  ));

  const handleSubmit = async (values: { name: string }) => {
    try {
      await axios.post("/api/softwares/create", {
        name: values.name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.post("/api/softwares/delete", {
        id,
      });
    } catch (error) {
      console.log(error);
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
            />

            <Button type="submit">Salvar</Button>
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
