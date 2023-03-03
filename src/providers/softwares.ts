import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

interface ISelected {
  document: string;
  notaFiscal?: string;
  link_detalhes?: string;
}

interface IEncomendasObject {
  fetched: boolean;
  encomendas: {
    data: string;
    descricao: string;
    hora: string;
    notaFiscal: string;
    unidade: string;
    remetente: string;
    ocorrencia: string;
  }[];
}

interface IValue {
  selectedEncomenda: ISelected;
  setSelectedEncomenda: React.Dispatch<React.SetStateAction<ISelected>>;
  currentPage: number;
  updatePage: (page: number) => void;
  maxPages: number;
  setMaxPages: React.Dispatch<React.SetStateAction<number>>;
  clearState: () => void;
  encomendas: IEncomendasObject;
  setEncomendas: React.Dispatch<React.SetStateAction<IEncomendasObject>>;
}

const SoftwaresContext = createContext({} as IValue);

export const useSoftwares = () => useContext(SoftwaresContext);

const SoftwaresProvider: React.FC<any> = ({ children }: any) => {
  const [selectedEncomenda, setSelectedEncomenda] = useState({} as ISelected);
  const [encomendas, setEncomendas] = useState({
    fetched: false,
    encomendas: [],
  } as IEncomendasObject);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  const updatePage = useCallback(
    (page: number) => {
      if (page > 0 && page <= maxPages) {
        setCurrentPage(page);
      }
    },
    [maxPages, currentPage, setCurrentPage]
  );

  const clearState = useCallback(() => {
    setSelectedEncomenda({} as ISelected);
    setCurrentPage(1);
    setMaxPages(1);
  }, [setSelectedEncomenda, setCurrentPage, setMaxPages]);

  const value = useMemo(() => {
    return {
      selectedEncomenda,
      setSelectedEncomenda,
      maxPages,
      setMaxPages,
      currentPage,
      updatePage,
      clearState,
      encomendas,
      setEncomendas,
    };
  }, [
    selectedEncomenda,
    setSelectedEncomenda,
    maxPages,
    setMaxPages,
    currentPage,
    updatePage,
    clearState,
    encomendas,
    setEncomendas,
  ]);

  return (
    <EncomendasContext.Provider value={value}>
      {children}
    </EncomendasContext.Provider>
  );
};

export default SoftwaresProvider;
