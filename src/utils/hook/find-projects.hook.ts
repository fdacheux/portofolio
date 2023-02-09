import { useCallback, useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query, CollectionReference } from "firebase/firestore";
import { db } from "../../firebase.config";



const projectsRef = collection(db, "projects")  as CollectionReference<any>;



export const useFindProjects = (paginationLimit: number) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const getAllProjects = useCallback( async (paginationLimit: number)  => {
    const filteredResults = query(projectsRef, orderBy("project-id"), limit(paginationLimit));
    setLoading(true);
      try {
        const response = await getDocs(filteredResults)
        const responseArr : any = [];
        
        if (!response) {
          throw new Error("No data found !");
        } else {
          response.forEach((doc) => {
            responseArr.push(doc.data());
          })
          setData(responseArr);
        }
      } catch (err: any) {
        console.log(err.message);
        setError(err?.message);
      } finally {
        setLoading(false);
      }
    }
    ,[]);
    useEffect(() => {
        getAllProjects(paginationLimit);
      }, []);
    return { isLoading, data, error, getAllProjects};
};