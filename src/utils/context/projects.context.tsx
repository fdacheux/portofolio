import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useFindProjects } from "../hook/find-projects.hook";
import IProjectData from "../../models/Project";

interface ProjectsContextProps {
  children: ReactNode;
}

interface ProjectsContextProviderProps {
  projects: IProjectData[];
  isLoading: boolean;
  previous: () => void;
  next: () => void;
  goToPage: (page: number) => void;
  size: number;
  offset: number;
  error: boolean;
  page: number;
  pageCount: number;
  limit: number;
  setLimit: (limit: number) => void;
}

const ProjectsContext = createContext<ProjectsContextProviderProps>({
  projects: [],
  isLoading: false,
  size: 0,
  offset: 0,
  error: false,
  page: 1,
  pageCount: 1,
  limit: 4,
  previous: () => {},
  next: () => {},
  goToPage: (_page: number) => {},
  setLimit: (_limit: number) => {},
});

const ProjectsContextProvider = ({ children }: ProjectsContextProps) => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(4);
  const [pageCount, setPageCount] = useState<number>(1);
  const {
    data: projects,
    isLoading,
    error,
    size,
    offset,
    getAllProjects,
  } = useFindProjects(limit);

  const fetchProjects = useCallback(
    (offset: number, limit: number) => {
      setPage((offset + limit) / limit);
      getAllProjects(offset, limit);
    },
    [getAllProjects]
  );

  const previous = useCallback(() => {
    if (page > 1) {
      fetchProjects((page - 1) * limit - limit, limit);
    } else {
      fetchProjects(pageCount * limit - limit, limit);
    }
  }, [fetchProjects, page, limit, pageCount]);

  const next = useCallback(() => {
    if (page !== pageCount) {
      fetchProjects(page * limit, limit);
    } else {
      fetchProjects(0, limit);
    }
  }, [fetchProjects, page, limit, pageCount]);

  const goToPage = useCallback(
    (pageNumber: number) => {
      fetchProjects((pageNumber - 1) * limit, limit);
    },
    [fetchProjects, limit]
  );

  useEffect(() => {
    setPageCount(Math.ceil(size / limit));
  }, [size, limit]);

  useEffect(() => {
    fetchProjects(offset, limit);
  }, [fetchProjects, limit, offset]);

  return (
    // the Provider gives access to the context to its children
    <ProjectsContext.Provider
      value={{
        projects,
        isLoading,
        size,
        offset,
        error,
        page,
        pageCount,
        limit,
        previous,
        next,
        goToPage,
        setLimit,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsContextProvider };