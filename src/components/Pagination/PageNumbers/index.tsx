import { useContext } from "react";
import { ProjectsContext } from "../../../utils/context/projects.context";
import { v4 as uuidv4 } from "uuid";
import style from "./PageNumbers.module.scss"

const Pagination = () => {
    
  const { page, pageCount, goToPage} = useContext(ProjectsContext);
    return (
        <div className={style.pageCount}>
        {[...Array(pageCount)].map((x, number) => (
        <button
          key={uuidv4()}
          className={style.pageCount__button}
          onClick={() => goToPage(number + 1)}
          disabled={page === number + 1}
        >
          <p className={style.pageCount__numbers}>{number + 1}</p>
        </button>
      ))}
        </div>
    )
}

export default Pagination;