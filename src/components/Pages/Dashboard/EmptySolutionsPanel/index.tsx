import { Container, ContentWrapper, SoftwaresButtons, Wrapper } from "./styles";
import { Button } from "@mantine/core";
import { useSoftwares } from "@/providers/softwares";
import { useRouter } from "next/router";

const EmptySolutionsPanel: React.FC = () => {
  const { softwaresFiltered } = useSoftwares();
  const router = useRouter();

  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <h1>
            {softwaresFiltered
              ? "Selecione um software"
              : "Nenhum software foi criado"}
          </h1>
          <hr />
          <SoftwaresButtons>
            {softwaresFiltered &&
              softwaresFiltered.map((item) => {
                return (
                  <Button
                    onClick={() => {
                      router.push({ query: { softwareId: item.id } });
                    }}
                    key={`softwares-buttons-${item.id}`}
                  >
                    {item.name}
                  </Button>
                );
              })}
          </SoftwaresButtons>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default EmptySolutionsPanel;
