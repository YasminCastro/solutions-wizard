import { Table } from "@mantine/core";
import { Container, TableContainer, ContentWrapper, Wrapper } from "./styles";
import { FaRegEdit } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { useEffect, useState } from "react";
import FiltersSection from "./Filters";
import { colors } from "@/styles/GlobalStyles";
import { useRouter } from "next/router";
import { useProblems } from "@/providers/problems";
import moment from "moment";

const SolutionsPanel: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const { setSoftwareId, problems } = useProblems();

  const { query } = useRouter();

  useEffect(() => {
    if (query.softwareId) {
      setSoftwareId(query.softwareId.toString());
    }
  }, [query]);

  const rows = problems.map((element) => (
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
      <td>{element.title}</td>
      <td>{moment(element.updatedAt).format("DD/MM/YY [às] HH:mm")}</td>
      {/* <td>
        {element. ? (
          <GoPrimitiveDot size={24} color={colors.mantineTeal} />
        ) : (
          <GoPrimitiveDot size={24} color={colors.mantineRed} />
        )}
      </td> */}
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
                  <th>Atualizado em</th>
                  <th>Solução</th>
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
