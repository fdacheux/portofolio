import {
  CollectionReference,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../../firebase.config";
import IProjectData from "../../models/Project";

const projectsRef = collection(db, "projects") as CollectionReference<any>;

export const useFindProject = () => {
  const [data, setData] = useState<IProjectData>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getProject = useCallback(async (projectId: number) => {
    setLoading(true);
    const filteredResults = query(
      projectsRef,
      where("project-id", "==", projectId)
    );
    try {
      const response = await getDocs(filteredResults);
      const responseArr: IProjectData[] = [];
      if (!response) {
        throw new Error("No data found !");
      } else {
        response.forEach((doc) => {
          responseArr.push(doc.data());
        });
        setData(responseArr[0]);
      }
    } catch (err: any) {
      console.log(err.message);
      setError(err?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { isLoading, data, error, getProject };
};
