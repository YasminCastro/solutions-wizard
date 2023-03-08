import { Button, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Wrapper } from "./styles";

const ButtonsModal: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Wrapper>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <Button>Ir para problema</Button>
        <Button>Criar novo problema</Button>
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open centered Modal</Button>
      </Group>
    </Wrapper>
  );
};

export default ButtonsModal;
