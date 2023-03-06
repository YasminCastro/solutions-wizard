import { Container, ContentWrapper, SoftwaresButtons, Wrapper } from "./styles";
import { Button } from "@mantine/core";
import { useSoftwares } from "@/providers/softwares";
import { useRouter } from "next/router";

const EmptySolutionsPanel: React.FC = () => {
  const { softwares } = useSoftwares();
  const router = useRouter();

  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <h1>
            {softwares ? "Selecione um software" : "Nenhum software foi criado"}
          </h1>
          <hr />
          <SoftwaresButtons>
            {softwares &&
              softwares.map((item) => {
                return (
                  <Button
                    onClick={() => {
                      router.push({ query: { softwareId: item.id } });
                    }}
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
