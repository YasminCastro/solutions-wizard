import { useReducer, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useForm } from "@mantine/form";
import {
  Button,
  MultiSelect,
  Select,
  Table,
  Textarea,
  TextInput,
} from "@mantine/core";
import { FaTrash } from "react-icons/fa";

import { useSoftwares } from "@/providers/softwares";
import { INITIAL_STATE_PROBLEM, problemReducer } from "./problemReducer";

import { Container, ContentWrapper, TableContainer, Wrapper } from "./styles";
import { colors } from "@/styles/GlobalStyles";

interface SelectData {
  label: string;
  value: string;
}

const ProblemForm: React.FC = () => {
  const [state, dispatch] = useReducer(problemReducer, INITIAL_STATE_PROBLEM);
  const [multiselectData, setMultiselectData] = useState([
    { value: "", label: "" },
  ]);

  const { softwares } = useSoftwares();

  let softwareSelect: SelectData[] = [];

  softwares.forEach((item) => {
    const parsed = { label: item.name, value: item.id.toString() };
    softwareSelect.push(parsed);
  });

  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      tags: [],
      imagesUrl: [],
      softwareId: "",
    },

    validate: {
      title: (value) =>
        value.length > 1 ? null : "Título não pode ser vazio.",
      description: (value) =>
        value.length > 1 ? null : "Descrição não pode estar vazia.",
    },
  });

  const handleSubmit = async (values: any) => {
    console.log(values);
    // dispatch({ type: "SET_SUBMIT_LOADING", payload: true });
    // const { data: createSoftware } = await axios.post("/api/softwares/create", {
    //   name: values.name,
    // });
    // if (createSoftware.message) {
    //   form.setErrors({ name: createSoftware.message });
    // } else {
    //   setRefreshSoftwares(`create-${moment().format()}`);
    // }
    // dispatch({ type: "SET_SUBMIT_LOADING", payload: false });
  };

  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <h1>Criar novo problema</h1>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Título"
              {...form.getInputProps("title")}
              withAsterisk
              autoFocus
            />
            <Textarea
              label="Descrição"
              withAsterisk
              {...form.getInputProps("description")}
            />

            <Select
              label="Software"
              placeholder="Escolha..."
              withAsterisk
              data={softwareSelect}
              {...form.getInputProps("softwareId")}
            />

            <MultiSelect
              label="Tags"
              data={multiselectData}
              placeholder="Crie suas Tags"
              searchable
              creatable
              getCreateLabel={(query) => `+ Create ${query}`}
              onCreate={(query) => {
                const item = { value: query, label: query };
                setMultiselectData((current) => [...current, item]);
                return item;
              }}
            />

            <Button type="submit" loading={state.createSoftwareLoading}>
              Salvar
            </Button>
          </form>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default ProblemForm;
