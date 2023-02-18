import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import OcProject from "../../components/OCProjectContent";
import Loader from "../../components/Loader";
import { useFindProject } from "../../utils/hook/find-project.hook";
import style from "./Project.module.scss";

function Project() {
  let { projectId } = useParams();
  const { data: project, isLoading, error, getProject } = useFindProject();
  const render = () => {
    if (isLoading) {
      return <Loader />;
    } else if (project && !isLoading) {
      return (
        <div className={style.project__content}>
          <div className={style.titleBox}>
            <h1 className={style.titleBox__text}>{project["project-name"]}</h1>
          </div>
          <div className={style.project__type}>
            <div className={style.project__typeImgBox}>
              <img src={project.typeIconUrl} alt="" className={style.project__typeIcon} />
            </div>
            <p>{project["project-type"]}</p>          
          </div>
          {project["project-type"] === "OpenClassrooms" && project && (
            <OcProject {...project} />
          )}
          <Link to="/portofolio">Go back to portofolio</Link>
        </div>
      );
    } else if (error) {
      return (
        <div className={style.titleBox}>
          <h1>404</h1>
        </div>
      );
    }
  };

  useEffect(() => {
    projectId && getProject(parseInt(projectId));
  }, [projectId, getProject]);

  return <main className={style.project}>{render()}</main>;
}

export default Project;
