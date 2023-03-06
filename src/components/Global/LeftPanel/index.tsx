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
import router, { useRouter } from "next/router";
import { useSoftwares } from "@/providers/softwares";

const LeftPanel: React.FC = () => {
  const { query } = useRouter();

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
          softwares.map((item) => {
            return (
              <Software
                key={item.name}
                active={item.id.toString() === String(query.softwareId)}
              >
                <NavLink
                  key={item.name}
                  variant="subtle"
                  label={item.name}
                  onClick={() => {
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
