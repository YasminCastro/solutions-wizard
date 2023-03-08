import { Problem, Software } from "@prisma/client";
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
  problems: Problem[];
  setRefreshProblems: React.Dispatch<React.SetStateAction<string>>;
  setSearchedProblems: React.Dispatch<React.SetStateAction<string>>;
  searchedProblems: string;
  problemsFiltered: Problem[];
  setSoftwareId: React.Dispatch<React.SetStateAction<string>>;
}

const ProblemsContext = createContext({} as IValue);

export const ProblemsProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [problems, setProblems] = useState([] as Problem[]);
  const [refreshProblems, setRefreshProblems] = useState("");
  const [searchedProblems, setSearchedProblems] = useState("");
  const [problemsFiltered, setProblemsFiltered] = useState([] as Problem[]);
  const [softwareId, setSoftwareId] = useState("");

  //GET PROBLEMS
  const getProblems = useCallback(async () => {
    if (softwareId) {
      try {
        const { data } = await axios.get(
          `/api/problems/get?softwareId=${softwareId}`
        );

        data.sort(compare);

        setProblems(data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    getProblems();
  }, [setSoftwareId]);

  //FILTER SOFTWARES

  // useEffect(() => {
  //   if (searchedSoftware) {
  //     let newSoftwaresList: Software[] = [];

  //     softwares.forEach((item) => {
  //       const softwareName = item.name.toLowerCase();
  //       if (softwareName.includes(searchedSoftware)) {
  //         newSoftwaresList.push(item);
  //       }
  //     });

  //     setSoftwaresFiltered(newSoftwaresList);
  //   } else {
  //     setSoftwaresFiltered(softwares);
  //   }
  // }, [searchedSoftware, softwares]);

  //SEND VALUES

  const value = useMemo(
    () => ({
      setRefreshProblems,
      problems,
      searchedProblems,
      setSearchedProblems,
      problemsFiltered,
      setSoftwareId,
    }),
    [
      setRefreshProblems,
      problems,
      searchedProblems,
      setSearchedProblems,
      problemsFiltered,
      setSoftwareId,
    ]
  );

  return (
    <ProblemsContext.Provider value={value}>
      {children}
    </ProblemsContext.Provider>
  );
};

export const useProblems = () => useContext(ProblemsContext);

function compare(a: any, b: any) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}
