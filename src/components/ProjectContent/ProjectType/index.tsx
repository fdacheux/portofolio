import IProjectData from "../../../models/Project";
import style from "./ProjectType.module.scss";

const ProjectType = (project: IProjectData) => {
  return (
    <div className={style.type}>
      <div className={style.type__imgBox}>
        <img src={project.typeIconUrl} alt="" className={style.type__icon} />
      </div>
      <p>{project["project-type"]}</p>
    </div>
  );
};

export default ProjectType;
