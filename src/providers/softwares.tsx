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
  setSearchedSoftware: React.Dispatch<React.SetStateAction<string>>;
  softwares: Software[];
  searchedSoftware: string;
  softwaresFiltered: Software[];
}

const SoftwaresContext = createContext({} as IValue);

export const SoftwaresProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [softwares, setSoftwares] = useState([] as Software[]);
  const [refreshSoftwares, setRefreshSoftwares] = useState("");
  const [searchedSoftware, setSearchedSoftware] = useState("");
  const [softwaresFiltered, setSoftwaresFiltered] = useState([] as Software[]);

  //GET SOFTWARES
  const getSoftwares = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/softwares/get");

      data.sort(compare);

      setSoftwares(data);
    } catch (error) {
      console.error(error);
    } finally {
    }
  }, []);

  useEffect(() => {
    getSoftwares();
  }, []);

  //FILTER SOFTWARES

  useEffect(() => {
    if (searchedSoftware) {
      let newSoftwaresList: Software[] = [];

      softwares.forEach((item) => {
        const softwareName = item.name.toLowerCase();
        if (softwareName.includes(searchedSoftware)) {
          newSoftwaresList.push(item);
        }
      });

      setSoftwaresFiltered(newSoftwaresList);
    } else {
      setSoftwaresFiltered(softwares);
    }
  }, [searchedSoftware, softwares]);

  //SEND VALUES
  const value = useMemo(
    () => ({
      setRefreshSoftwares,
      softwares,
      setSoftwares,
      searchedSoftware,
      setSearchedSoftware,
      softwaresFiltered,
    }),
    [
      setRefreshSoftwares,
      softwares,
      setSoftwares,
      searchedSoftware,
      setSearchedSoftware,
      softwaresFiltered,
    ]
  );

  return (
    <SoftwaresContext.Provider value={value}>
      {children}
    </SoftwaresContext.Provider>
  );
};

export const useSoftwares = () => useContext(SoftwaresContext);

function compare(a: any, b: any) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
