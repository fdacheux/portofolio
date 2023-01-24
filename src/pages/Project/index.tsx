import { useParams } from "react-router-dom";
import style from "./Project.module.scss";
import projects from "../../data/projects.data.json";

function Project() {
  let { projectId } = useParams();
  let projectIndex = projectId ? parseInt(projectId) - 1 : undefined;
  let project = projectIndex !== undefined ? projects[projectIndex] : undefined;
 

  return (
    <main className={style.project}>
      {project ? (
        <div className={style.titleBox}>
          <h1>{project.title}</h1>
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
