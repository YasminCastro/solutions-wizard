import { Group, Text, rem } from "@mantine/core";
import {
  AiOutlineUpload,
  AiFillAlert,
  AiOutlineCloudUpload,
} from "react-icons/ai";

import { Dropzone, DropzoneProps, FileWithPath } from "@mantine/dropzone";
import { colors } from "@/styles/GlobalStyles";
import { useImages } from "@/providers/images";
import { useState } from "react";
import axios from "axios";

export function DropzoneComponent(props: Partial<DropzoneProps>) {
  const { setFiles } = useImages();
  const [errorMessage, setErrorMessage] = useState("");
  const [imagesOk, setImagesOk] = useState(false);

  const handleUpload = async (files: FileWithPath[]) => {
    setErrorMessage("");
    // setFiles(files);
    setImagesOk(true);

    // const formData = new FormData();
    // formData.append("file", files[0], files[0].name);

    const { data } = await axios.post("/api/images/upload", {
      name: files[0].name,
      type: files[0].type,
    });

    console.log("URL", data);

    // const putImage = await axios.put(data.url, files[0], {
    //   headers: {
    //     "Content-Type": files[0].type,
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // });

    // console.log(putImage);
  };

  const handleErrors = (files: any) => {
    setImagesOk(false);
    const fileName = files[0].file.name;
    const fileError = files[0].errors[0].message;
    setErrorMessage(`${fileName} - ${fileError}`);
  };

  const MessageDropzone = () => {
    if (errorMessage) {
      return (
        <Text size="sm" color={colors.mantineRed} inline mt={7}>
          {errorMessage}
        </Text>
      );
    } else if (imagesOk) {
      return (
        <Text size="sm" color={colors.mantineTeal} inline mt={7}>
          Imagens carregadas com sucesso!
        </Text>
      );
    } else {
      return (
        <Text size="sm" color="dimmed" inline mt={7}>
          As imagens não devem passar de 1mb
        </Text>
      );
    }
  };

  return (
    <Dropzone
      onDrop={handleUpload}
      onReject={handleErrors}
      maxSize={1024 * 1024}
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

          {<MessageDropzone />}
        </div>
      </Group>
    </Dropzone>
  );
}
