import { Alert, Chip, Divider, ListItem, Paper, Stack } from "@mui/material";
import style from "./ProjectContent.module.scss";
import { v4 as uuidv4 } from "uuid";
import AdditionalInfo from "../AdditionalInfo";
import ListElement from "../ListElement";

const ProjectContent = (project: any) => {
  const dateTime = project["completion-date"].toDate();
  const frDate = dateTime.toLocaleDateString("en-GB");
  const isProjectCompleted = () => {
    if (project.progression === "fini") {
      return (
        <AdditionalInfo>
          <span>Projet complété le :</span>
          <time dateTime={project.completionDate}> {frDate}</time>
        </AdditionalInfo>
      );
    } else {
      return (
        <AdditionalInfo>
          <span>Projet {project.progression}.</span>
        </AdditionalInfo>
      );
    }
  };
  return (
    <div className={style.project}>
      <Paper elevation={3} className={style.paper}>
        <div className={style.project__content}>
          <div className={style.project__type}>
            <div className={style.project__typeImgBox}>
              <img
                src={project.typeIconUrl}
                alt=""
                className={style.project__typeIcon}
              />
            </div>
            <p>{project["project-type"]}</p>
          </div>
          {project["project-type"] === "OpenClassrooms" && (
            <div className={style.alert}>
              <Alert severity="info">
                Recruteurs : si vous souhaitez visionner les soutenances, ou
                obtenir de plus amples informations sur la nature d'un projet
                d'OpenClassooms, merci de me contacter.
              </Alert>
            </div>
          )}
          <div>
            <ul className={style.project__tagsList}>
              {project.tags.map((el: string) => {
                return (
                  <ListItem
                    key={uuidv4()}
                    sx={{
                        width: "fit-content",
                        paddingLeft: 0,
                    }}
                  >
                    <Chip label={el}/>
                  </ListItem>
                );
              })}
            </ul>
          </div>
          <section className={`${style.description} ${style.section}`}>
            <article>
              <Divider>
                <h2 className={style.section__title}> Projet </h2>
              </Divider>
              {isProjectCompleted()}
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                className={style.section__line}
              >
                <div className={style.section__col}>
                  <h3 className={style.section__colTitle}>Description :</h3>
                  <div>
                    <p className={style.section__colText}>
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className={style.section__col}>
                  <h3 className={style.section__colTitle}>
                    Technologies, langages, outils :{" "}
                  </h3>
                  <div>
                    <ul className={`${style.section__colText} ${style.section__lists}`}>
                      {project.technologies.map((el: string) => {
                        return <ListElement key={uuidv4()} text={el}/>;
                      })}
                    </ul>
                  </div>
                </div>
              </Stack>
            </article>
          </section>
          {project["project-type"] === "OpenClassrooms" && (
            <section className={style.soutenance}>
              <article>
                <Divider>
                  <h2 className={style.section__title}> Soutenance </h2>
                </Divider>
                <AdditionalInfo>
                  <div>
                    À la fin de chaque projet OpenClassrooms a lieu une
                    soutenance sous forme de jeu de rôles. L'étudiant présente
                    d'abord son travail pendant un certain temps, en s'appuyant
                    soit sur son code, soit sur des slides, soit les deux. Vient
                    ensuite un temps d'échange, mais toujours en gardant ce
                    principe de rôles. Le discours doit, bien entendu, être
                    adapté en fonction du rôle joué par l'évaluateur : CTO, CEO,
                    client, ...
                  </div>
                </AdditionalInfo>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  className={style.section__line}
                >
                  <div className={style.section__col}>
                    <h3 className={style.section__colTitle}>Description : </h3>
                    <p className={style.section__colText}>
                      {project["soutenance-description"]}
                    </p>
                  </div>
                  <div className={style.section__col}>
                    <h3 className={style.section__colTitle}>
                      Outils utilisés pour la présentation :
                    </h3>
                    <ul className={`${style.section__colText} ${style.section__lists}`}>
                      {project["soutenance-tools"].map((el: string) => {
                        return <ListElement key={uuidv4()} text={el}/>;
                      })}
                    </ul>
                  </div>
                </Stack>
              </article>
            </section>
          )}
        </div>
      </Paper>
    </div>
  );
};

export default ProjectContent;
