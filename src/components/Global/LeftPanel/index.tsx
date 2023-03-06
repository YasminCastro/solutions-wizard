import { useState } from "react";

import { NavLink } from "@mantine/core";
import { FaHatWizard } from "react-icons/fa";
import { AiOutlineAppstoreAdd, AiFillBug } from "react-icons/ai";
import { RxDot } from "react-icons/rx";

import {
  OptionsButtons,
  Software,
  SoftwaresOptions,
  Title,
  Wrapper,
} from "./styles";
import { colors } from "@/styles/GlobalStyles";
import router from "next/router";
import { useSoftwares } from "@/providers/softwares";

const LeftPanel: React.FC = () => {
  const [active, setActive] = useState(0);

  const { softwares } = useSoftwares();

  return (
    <Wrapper>
      <Title>
        <FaHatWizard size={24} color={colors.purple1000} />
        Solutions Wizard
      </Title>
      <OptionsButtons>
        <NavLink key="problems" label="Novo problema" icon={<AiFillBug />} />
        <NavLink
          key="software"
          label="Software"
          icon={<AiOutlineAppstoreAdd />}
          onClick={() => {
            router.push({ pathname: "/software" });
          }}
        />
      </OptionsButtons>

      <SoftwaresOptions>
        {softwares &&
          softwares.map((item, index) => {
            return (
              //@ts-ignore
              <Software key={item.name} active={index === active}>
                <NavLink
                  key={item.name}
                  variant="subtle"
                  label={item.name}
                  onClick={() => {
                    setActive(index);

                    router.push({ query: { softwareId: item.id } });
                  }}
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
