import axios from "axios";
import { useEffect, useState } from "react";
import { Software as SoftwareTypes } from "@prisma/client";

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
import slugify from "@/util/slugify";

const LeftPanel: React.FC<{ softwares?: SoftwareTypes[] }> = ({
  softwares,
}) => {
  const [active, setActive] = useState(0);

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
          label="Novo software"
          icon={<AiOutlineAppstoreAdd />}
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

                    router.push({ query: { software: slugify(item.name) } });
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
