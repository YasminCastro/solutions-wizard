import { Container, ContentWrapper, SoftwaresButtons, Wrapper } from "./styles";
import { Button } from "@mantine/core";
import { useSoftwares } from "@/providers/softwares";

const EmptySolutionsPanel: React.FC = () => {
  const { softwares } = useSoftwares();

  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <h1>Selecione o software desejado</h1>
          <hr />
          <SoftwaresButtons>
            {softwares &&
              softwares.map((item) => {
                return <Button>{item.name}</Button>;
              })}
          </SoftwaresButtons>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default EmptySolutionsPanel;
