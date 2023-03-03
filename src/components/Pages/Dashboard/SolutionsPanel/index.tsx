import { Table } from "@mantine/core";
import { Container, TableContainer, ContentWrapper, Wrapper } from "./styles";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import FiltersSection from "./Filters";

const SolutionsPanel: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const elements = [
    {
      id: 1,
      problemTitle: "Error-1",
      solutionTitle: "teste",
      dateUpdated: "2020",
      hasSolution: true,
    },
    {
      id: 2,
      problemTitle: "Error-2",
      solutionTitle: "teste",
      dateUpdated: "2020",
      hasSolution: true,
    },
  ];

  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>
        <button
          onClick={() => {
            console.log("EDITAR");
          }}
        >
          <FaRegEdit size={18} />
        </button>
      </td>
      <td>{element.problemTitle}</td>
      <td>{element.solutionTitle}</td>
      <td>{element.dateUpdated}</td>
    </tr>
  ));

  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <h1>Veeam</h1>
          <hr />
          <FiltersSection />
          <hr />

          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Editar</th>
                  <th>Problema</th>
                  <th>Solução</th>
                  <th>Atualizado em</th>
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

export default SolutionsPanel;
