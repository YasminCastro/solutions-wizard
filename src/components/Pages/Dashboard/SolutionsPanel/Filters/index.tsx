import { Container, Solution, Wrapper } from "./styles";
import { useState } from "react";
import { Chip } from "@mantine/core";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsFilter } from "react-icons/bs";

const FiltersSection: React.FC = () => {
  const [value, setValue] = useState("all");

  return (
    <Wrapper>
      <Container>
        <BsFilter size={24} />
        <Solution>
          <p>Solução</p>
          <div className="solution-chips">
            <Chip.Group multiple={false} value={value} onChange={setValue}>
              <Chip color="green" size="xs" value="yes">
                Sim
              </Chip>
              <Chip color="red" size="xs" value="no">
                Não
              </Chip>
              <Chip size="xs" value="all">
                Todos
              </Chip>
            </Chip.Group>
          </div>
        </Solution>
      </Container>
    </Wrapper>
  );
};

export default FiltersSection;
