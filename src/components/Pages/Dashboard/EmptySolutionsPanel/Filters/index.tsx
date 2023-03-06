import {
  Categories,
  Container,
  Solution,
  TagsButtons,
  Wrapper,
} from "./styles";
import { useState } from "react";
import { Button, Chip, Menu } from "@mantine/core";
import { BsFilter, BsDot } from "react-icons/bs";

const FiltersSection: React.FC = () => {
  const [solutionValue, setSolutionValue] = useState("all");
  const [categoriesValue, setCategoriesValue] = useState([""]);

  const categoriesData = [
    { name: "Sim", value: "yes" },
    { name: "Não", value: "no" },
  ];

  return (
    <Wrapper>
      <Container>
        <BsFilter size={24} />
        <Categories>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button>Tags</Button>
            </Menu.Target>

            <Menu.Dropdown>
              <TagsButtons>
                <Button
                  onClick={() => {
                    setCategoriesValue([""]);
                  }}
                >
                  Limpar
                </Button>
                <BsDot />
                <Button
                  onClick={() => {
                    let values = [""];
                    categoriesData.forEach((category) => {
                      values.push(category.value);
                    });
                    setCategoriesValue(values);
                  }}
                >
                  Todos
                </Button>
              </TagsButtons>

              <div className="categories-tags">
                <Chip.Group
                  multiple
                  value={categoriesValue}
                  onChange={setCategoriesValue}
                >
                  {categoriesData.map((item, index) => (
                    <Chip
                      size="xs"
                      color="grape"
                      key={item.value}
                      value={item.value}
                    >
                      {item.name}
                    </Chip>
                  ))}
                </Chip.Group>
              </div>
            </Menu.Dropdown>
          </Menu>
        </Categories>
        <Solution>
          <p>Solução</p>
          <div className="solution-chips">
            <Chip.Group
              multiple={false}
              value={solutionValue}
              onChange={setSolutionValue}
            >
              <Chip key="yes" color="green" size="xs" value="yes">
                Sim
              </Chip>
              <Chip key="no" color="red" size="xs" value="no">
                Não
              </Chip>
              <Chip key="all" size="xs" value="all">
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
