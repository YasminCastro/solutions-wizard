import { Software } from "@prisma/client";
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
  setRefreshSoftwares: React.Dispatch<React.SetStateAction<string>>;
  setSoftwares: React.Dispatch<React.SetStateAction<Software[]>>;
  softwares: Software[];
}

const SoftwaresContext = createContext({} as IValue);

export const SoftwaresProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [softwares, setSoftwares] = useState([] as Software[]);
  const [refreshSoftwares, setRefreshSoftwares] = useState("");

  const getSoftwares = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/softwares/get");
      setSoftwares(data);
    } catch (error) {
      console.error(error);
    } finally {
    }
  }, []);

  useEffect(() => {
    getSoftwares();
  }, [refreshSoftwares, softwares]);

  const value = useMemo(
    () => ({
      setRefreshSoftwares,
      softwares,
      setSoftwares,
    }),
    [setRefreshSoftwares, softwares, setSoftwares]
  );

  return (
    <SoftwaresContext.Provider value={value}>
      {children}
    </SoftwaresContext.Provider>
  );
};

export const useSoftwares = () => useContext(SoftwaresContext);
