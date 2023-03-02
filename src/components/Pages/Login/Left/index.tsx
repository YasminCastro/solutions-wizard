import { Container, Wrapper } from "./styles";

import Image from "next/image";

const LeftSection: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Image
          src="/wizard-cut.png"
          width={1040}
          height={1040}
          alt="Magin robot wizard"
        />
      </Container>
    </Wrapper>
  );
};

export default LeftSection;
