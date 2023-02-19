import { useCallback, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  CollectionReference,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import IProjectData from "../../models/Project";

const projectsRef = collection(db, "projects") as CollectionReference<any>;

export const useFindProjects = (paginationLimit: number) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [size, setSize] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);

  const getAllProjects = useCallback(
    async (offset: number, paginationLimit: number) => {
      const filteredResults = query(
        projectsRef,
        orderBy("project-id"),
        startAfter(offset),
        limit(paginationLimit)
      );
      setLoading(true);
      try {
        const snapshot = await getCountFromServer(projectsRef);
        setSize(snapshot.data().count);
        const response = await getDocs(filteredResults);
        const responseArr: IProjectData[] = [];

        if (!response) {
          throw new Error("No data found !");
        } else {
          response.forEach((doc) => {
            responseArr.push(doc.data());
          });
          setData(responseArr);
        }
      } catch (err: any) {
        console.log(err.message);
        setError(err?.message);
      } finally {
        // setLoading(false);
      }
    },
    []
  );
  useEffect(() => {
    getAllProjects(offset, paginationLimit);
  }, [getAllProjects, offset, paginationLimit]);
  return { isLoading, data, error, size, offset, setOffset, getAllProjects };
};
