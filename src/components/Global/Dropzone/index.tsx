import { Group, Text, rem } from "@mantine/core";
import {
  AiOutlineUpload,
  AiFillAlert,
  AiOutlineCloudUpload,
} from "react-icons/ai";

import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import { colors } from "@/styles/GlobalStyles";

export function DropzoneComponent(props: Partial<DropzoneProps>) {
  const handleUpload = (files: any) => {
    console.log("accepted files");
  };

  return (
    <Dropzone
      onDrop={handleUpload}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={2 * 1024 * 1024}
      accept={{ "image/*": [] }}
      {...props}
    >
      <Group
        position="center"
        spacing="xl"
        style={{ minHeight: rem(150), pointerEvents: "none" }}
      >
        <Dropzone.Accept>
          <AiOutlineUpload size="3.2rem" color={colors.mantineTeal} />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <AiFillAlert size="3.2rem" color={colors.mantineRed} />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <AiOutlineCloudUpload size="3.2rem" />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Arraste as imagens para fazer upload
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            As imagens não devem passar de 2mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}
