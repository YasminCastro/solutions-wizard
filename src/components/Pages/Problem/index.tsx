import { useReducer, useState } from "react";
import { useForm } from "@mantine/form";
import {
  Button,
  MultiSelect,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";

import { useSoftwares } from "@/providers/softwares";
import { INITIAL_STATE_PROBLEM, problemReducer } from "./problemReducer";

import {
  Container,
  ContentWrapper,
  ErrorMessage,
  SelectBlocks,
  Wrapper,
} from "./styles";
import { DropzoneComponent } from "@/components/Global/Dropzone";
import axios from "axios";
import ButtonsModal from "./ButtonsModal";

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
      softwareId: "",
    },

    validate: {
      title: (value) =>
        value.length > 1 ? null : "Título não pode ser vazio.",
      description: (value) =>
        value.length > 1 ? null : "Descrição não pode estar vazia.",
      softwareId: (value) =>
        value.length > 1 ? null : "Você deve escolher um software.",
    },
  });

  const handleSubmit = async (values: any) => {
    dispatch({ type: "SET_SUBMIT_LOADING", payload: true });
    const { data: createProblem } = await axios.post(
      "/api/problems/create",
      values
    );

    if (createProblem.message === "Título deve ser unico.") {
      form.setErrors({ title: createProblem.message });
    } else if (createProblem.message) {
      form.setErrors({ error: createProblem.message });
    } else {
      dispatch({ type: "SET_PROBLEM_CREATED", payload: true });
    }

    dispatch({ type: "SET_SUBMIT_LOADING", payload: false });
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

            <div className="block-1">
              <SelectBlocks>
                <Select
                  label="Software"
                  placeholder="Escolha..."
                  withAsterisk
                  data={softwareSelect}
                  {...form.getInputProps("softwareId")}
                  className="softwares"
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
                  className="tags"
                  {...form.getInputProps("tags")}
                />
              </SelectBlocks>
              {/* <DropzoneComponent /> */}
            </div>

            <Button
              className="save-button"
              type="submit"
              loading={state.createProblemLoading}
            >
              Salvar
            </Button>

            {form.errors.error && (
              <ErrorMessage>{form.errors.error}</ErrorMessage>
            )}
          </form>

          {/* {<ButtonsModal></ButtonsModal>} */}
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default ProblemForm;
