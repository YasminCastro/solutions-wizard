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

const LeftPanel: React.FC = () => {
  const [active, setActive] = useState(0);
  const [softwares, setSoftwares] = useState<SoftwareTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<SoftwareTypes[]>(
          `/api/softwares/find`
        );
        setSoftwares(data);
      } catch (error) {
        console.error;
      }
    };

    fetchData();
  }, []);

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
        {softwares.map((item, index) => {
          return (
            //@ts-ignore
            <Software key={item.name} active={index === active}>
              <NavLink
                key={item.name}
                variant="subtle"
                label={item.name}
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
