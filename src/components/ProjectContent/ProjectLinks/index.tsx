import { GitHub, PreviewRounded } from "@mui/icons-material";
import style from "./ProjectLinks.module.scss";
import IProjectData from "../../../models/Project";

const ProjectLinks = (project: IProjectData) => {
  return (
    <div className={style.links}>
      <div className={`${style.links__urlBox} ${style.links__github}`}>
        <p className={style.noXsmallScreens}>Source : </p>
        <a
          href={project["github-url"]}
          aria-label="Github"
          className={style.links__url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub
            sx={{
              fontSize: 32,
              color: "#294b37",
            }}
          />
        </a>
      </div>
      {project.displayUrl && (
        <div className={`${style.links__urlBox} ${style.links__otherUrl}`}>
          <p  className={style.noXsmallScreens}>Visiter le site : </p>
          <a
            href={project.displayUrl}
            aria-label="Aperçu du site"
            className={style.links__url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PreviewRounded
              sx={{
                fontSize: 35,
                color: "#294b37",
              }}
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectLinks;
