import { NavLink } from "@mantine/core";
import { FaHatWizard, FaRegLightbulb } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { RxDot } from "react-icons/rx";

import {
  OptionsButtons,
  Software,
  SoftwaresOptions,
  Title,
  Wrapper,
} from "./styles";
import { colors } from "@/styles/GlobalStyles";
import { useState } from "react";

const data = [
  { label: "Veeam" },
  {
    label: "Security",
  },
];

const LeftPanel: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <Wrapper>
      <Title>
        <FaHatWizard size={24} color={colors.purple1000} />
        Solutions Wizard
      </Title>
      <OptionsButtons>
        <NavLink label="Nova solução" icon={<FaRegLightbulb />} />
        <NavLink label="Novo software" icon={<AiOutlineAppstoreAdd />} />
      </OptionsButtons>

      <SoftwaresOptions>
        {data.map((item, index) => {
          return (
            //@ts-ignore
            <Software active={index === active}>
              <NavLink
                key={item.label}
                variant="subtle"
                label={item.label}
                onClick={() => setActive(index)}
                icon={<RxDot />}
              />
            </Software>
          );
        })}
      </SoftwaresOptions>
    </Wrapper>
  );
};

export default LeftPanel;
