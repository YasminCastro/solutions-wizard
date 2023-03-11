import { Container, Wrapper } from "./styles";

import Image from "next/image";
import { useState } from "react";

const LeftSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  return (
    <Wrapper>
      <Container>
        {imageError ? (
          <img
            src="/wizard.png"
            width={1040}
            height={1040}
            alt="Uma mistura de robô com mago sorrindo, com seu bicho de estimação"
          />
        ) : (
          <Image
            src="/wizard.png"
            quality={100}
            width={1040}
            height={1040}
            priority
            onError={(e) => setImageError(true)}
            alt="Uma mistura de robô com mago sorrindo, com seu bicho de estimação"
          />
        )}
      </Container>
    </Wrapper>
  );
};

export default LeftSection;
