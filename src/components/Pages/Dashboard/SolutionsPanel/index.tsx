import { Badge, Table } from "@mantine/core";
import { Container, TableContainer, ContentWrapper, Wrapper } from "./styles";
import { FaRegEdit } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { useEffect, useState } from "react";
import FiltersSection from "./Filters";
import { colors, randomMantineColors } from "@/styles/GlobalStyles";
import { useRouter } from "next/router";
import moment from "moment";
import axios from "axios";
import { Problem } from "@prisma/client";

const SolutionsPanel: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [problems, setProblems] = useState([] as Problem[]);
  const [softwareName, setSoftwareName] = useState("");

  const { query } = useRouter();

  const getProblems = async () => {
    if (query.softwareId) {
      const { data } = await axios.get(
        `/api/problems/get?softwareId=${query.softwareId}`
      );

      setProblems(data.problems);
      setSoftwareName(data.softwareName);
    }
  };

  useEffect(() => {
    getProblems();
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
      <td>
        {element.tags.map((tag) => (
          <Badge
            size="xs"
            color={randomMantineColors[Math.floor(Math.random() * 13)]}
          >
            {tag}
          </Badge>
        ))}
      </td>
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
          <h1>{softwareName}</h1>
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
                  <th>Tags</th>
                  {/* <th>Solução</th> */}
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
