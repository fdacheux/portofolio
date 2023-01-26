import style from "./OcProjectContent.module.scss";
import { Alert } from "@mui/material";
import type IProjectData from "../../models/Project";
import { v4 as uuidv4 } from "uuid";



function ocProjectContent(project :  any ) {
  const dateTime = new Date(project.completionDate);
    const frDate = dateTime.toLocaleDateString("fr");
    console.log(project)

  return (
    <div className={style.ocContent}>
      <Alert severity="info">
        Recruteurs : si vous souhaitez visionner les soutenances, ou obtenir de
        plus amples informations sur la nature d'un projet d'OpenClassooms,
        merci de me contacter.
      </Alert>
      <div>
        <ul>
          {project.tags.map((el: string) => {
            return <li id={uuidv4()}>{el}</li>;
          })}
        </ul>
      </div>
      <section className={style.description}>
        <div>
          Projet complété le :
          <time dateTime={project.completionDate}> {frDate}</time>
        </div>
        <p>{project.description}</p>
      </section>
      <section className={style.soutenance}>
        {project.descriptionSoutenance}
      </section>
      <section>
        <ul>
          {project.technologies.map((el: string) => {
            return <li id={uuidv4()}>{el}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

export default ocProjectContent;
