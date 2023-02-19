import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useFindProject } from "../../utils/hook/find-project.hook";
import style from "./Project.module.scss";
import ProjectContent from "../../components/ProjectContent";
import PagesTitle from "../../components/PagesTitle";
import { Palette } from "@mui/icons-material";

function Project() {
  let { projectId } = useParams();
  const { data: project, isLoading, error, getProject } = useFindProject();
  const render = () => {
    if (isLoading) {
      return <Loader />;
    } else if (project && !isLoading) {
      return (
        <div className={style.project}>
          <PagesTitle title={project["project-name"]} />
 
          <ProjectContent {...project} />
          <div className={style.project__linkContainer}>
            <Palette sx={{
              fontSize: 30,
              color: "#bda239",
            }} />
            <Link to="/portofolio" className={style.project__link}>Go back to portofolio</Link>
          </div>
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

  return <main >{render()}</main>;
}

export default Project;
