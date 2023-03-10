import axios from "axios";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface IValue {
  setFiles: React.Dispatch<React.SetStateAction<[]>>;
  files: any[];
}

const ImagesContext = createContext({} as IValue);

export const ImagesProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [files, setFiles] = useState([] as any);

  const uploadImages = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/images/upload");
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    uploadImages();
  }, []);

  const value = useMemo(
    () => ({
      setFiles,
      files,
    }),
    [setFiles, files]
  );

  return (
    <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
  );
};

export const useImages = () => useContext(ImagesContext);
