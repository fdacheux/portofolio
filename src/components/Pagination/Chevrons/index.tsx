import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import style from "./Chevrons.module.scss";
import { useContext } from "react";
import { ProjectsContext } from "../../../utils/context/projects.context";

interface IChevron {
    isLeftChevron: boolean;
}

const Chevron = ({isLeftChevron}: IChevron) => {
    
    const { next, previous } = useContext(ProjectsContext);
    
  return isLeftChevron ? (
    <button className={style.chevron} onClick={previous}>
      <ArrowBackIosNew className={style.chevronImg} />
      <span className={`${style.xsmallScreens} ${style.paginationText}`}>
        {" "}
        Précédent{" "}
      </span>
    </button>
  ) : (
    <button className={style.chevron} onClick={next}>
      <span className={`${style.xsmallScreens} ${style.paginationText}`}>
        Suivant
      </span>
      <div className={style.chevronContainer}>
        <ArrowForwardIos className={style.chevronImg} />
      </div>
    </button>
  );
}


export default Chevron;