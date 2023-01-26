import style from "./Gallery.module.scss";
import { Grid } from "@mui/material";
import bookiMiniature from "../../assets/booki-framed-transparentBg.png";
import ohMyFoodMiniature from "../../assets/ohmyfood-framed.png";
import panthereMiniature from "../../assets/panthere-framed.png";
import projects from "../../data/projects.data.json";

function Gallery() {
  return (
    <section className={style.gallery}>
      <Grid container rowSpacing={3} className={style.cardsGrid}>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          className={style.cardsGrid__cell}
          paddingLeft={0}
        >
          <div className={style.card}>
            <div className={style.card__imgContainer}>
              <a href={`/project/${projects[0].projectId}`}>
                <img
                  src={bookiMiniature}
                  alt="Découvrir le projet Booki"
                  className={style.card__miniature}
                />
              </a>
            </div>
            <div className={style.card__projectLabel}>
              <h2 className={style.card__projectTitle}>{projects[0].title}</h2>
              <p className={style.card__projectDescription}>
                {projects[0].description_short}
              </p>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          xl={3}
          className={style.cardsGrid__cell}
          paddingLeft={0}
        >
          <div className={style.card}>
            <div className={style.card__imgContainer}>
              <a href={`/project/${projects[1].projectId}`}>
                <img
                  src={ohMyFoodMiniature}
                  alt="Découvrir le projet ohmyfood"
                  className={`${style.card__miniature} ${style.card__toRight}`}
                />
              </a>
            </div>
            <div className={style.card__projectLabel}>
              <h2 className={style.card__projectTitle}>{projects[1].title}</h2>
              <p className={style.card__projectDescription}>
                {projects[1].description_short}
              </p>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          xl={3}
          className={style.cardsGrid__cell}
          paddingLeft={0}
        >
          <div className={style.card}>
          <div className={style.card__imgContainer}>
              <a href={`/project/${projects[2].projectId}`}>
                <img
                  src={panthereMiniature}
                  alt={projects[2].alt}
                  className={style.card__miniature}
                />
              </a>
            </div>
            <div className={style.card__projectLabel}>
              <h2 className={style.card__projectTitle}>{projects[2].title}</h2>
              <p className={style.card__projectDescription}>
                {projects[2].description_short}
              </p>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          xl={3}
          className={style.cardsGrid__cell}
          paddingLeft={0}
        >
          <div className={style.card}>test</div>
        </Grid>
        {/* <Grid
          item
          xs={12}
          md={6}
          lg={4}
          xl={3}
          className={style.cardsGrid__cell}
          paddingLeft={0}
        >
          <div className={style.card}>test</div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          xl={3}
          className={style.cardsGrid__cell}
          paddingLeft={0}
        >
          <div className={style.card}>test</div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          xl={3}
          className={style.cardsGrid__cell}
          paddingLeft={0}
        >
          <div className={style.card}>test</div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          xl={3}
          className={style.cardsGrid__cell}
          paddingLeft={0}
        >
          <div className={style.card}>test</div>
        </Grid> */}
      </Grid>
    </section>
  );
}

export default Gallery;
