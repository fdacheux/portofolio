import { Link, useParams } from "react-router-dom";
import style from "./Project.module.scss";
import projects from "../../data/projects.data.json";
import OcProject from "../../components/OCProjectContent";

function Project() {
  let { projectId } = useParams();
  let projectIndex = projectId ? parseInt(projectId) - 1 : undefined;
  let project = projectIndex !== undefined ? projects[projectIndex] : undefined;

  return (
    <main className={style.project}>
      {project ? (
        <div className={style.project__content}>
          <div className={style.titleBox}>
            <h1 className={style.titleBox__text}>{project.title}</h1>
          </div>
          {project.typeOfProject === "OpenClassrooms" && project && <OcProject {...project} />}
          <Link to="/portofolio">Go back to portofolio</Link>
        </div>
      ) : (
        <div className={style.titleBox}>
          <h1>404</h1>
        </div>
      )}
    </main>
  );
}

export default Project;
