import style from "./OcProjectContent.module.scss";
import { Alert } from "@mui/material";
import { v4 as uuidv4 } from "uuid";



function OCProjectContent(project : any) {
  const dateTime = new Date(project['completion-date']);
  const frDate = dateTime.toLocaleDateString("fr");

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
            return <li key={uuidv4()}>{el}</li>;
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
        <p>
          À la fin de chaque projet OpenClassrooms a lieu une soutenance sous
          forme de jeu de rôles. L'étudiant présente d'abord son travail pendant
          un certain temps, en s'appuyant soit sur son code, soit sur des
          slides, soit les deux. Vient ensuite un temps d'échange, mais
          toujours en gardant ce principe de rôles. Le discours doit, bien
          entendu, être adapté en fonction du rôle joué par l'évaluateur : CTO,
          CEO, client, ...
        </p>
        <p>{project.descriptionSoutenance}</p>
      </section>
      <section>
        <ul>
          {project.technologies.map((el: string) => {
            return <li key={uuidv4()}>{el}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

export default OCProjectContent;
