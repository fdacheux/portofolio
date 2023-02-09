import {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from "react";
import { useFindProjects } from "../hook/find-projects.hook";

interface ProjectsContextProps {
    children: ReactNode;
}