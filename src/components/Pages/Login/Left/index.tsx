import { Container, Wrapper } from "./styles";

import Image from "next/image";

const LeftSection: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Image
          src="/wizard-cut.png"
          quality={100}
          width={1040}
          height={1040}
          alt="Uma mistura de robô com mago sorrindo, com seu bicho de estimação"
        />
      </Container>
    </Wrapper>
  );
};

export default LeftSection;
