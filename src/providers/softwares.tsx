import prisma from "@/lib/prisma";
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
      console.log("data", data);
      setSoftwares(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getSoftwares();
  }, [refreshSoftwares]);

  const value = useMemo(
    () => ({
      setRefreshSoftwares,
      softwares,
    }),
    [setRefreshSoftwares, softwares]
  );

  return (
    <SoftwaresContext.Provider value={value}>
      {children}
    </SoftwaresContext.Provider>
  );
};

export const useSoftwares = () => useContext(SoftwaresContext);
