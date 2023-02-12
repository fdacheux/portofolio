import style from "./Gallery.module.scss";
import { Grid } from "@mui/material";
import Loader from "../../components/Loader";
import Pagination  from "../Pagination";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useFindProjects } from "../../utils/hook/find-projects.hook";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

function Gallery() {

  const [windowWidth, setWindowSize] = useState(window.screen.width);
  const [paginationLimit, setPaginationLimit] = useState(windowWidth < 768 ? 1 : 4);
  const changePagination = () => {
    setWindowSize(window.screen.width);
    setPaginationLimit(windowWidth < 768 ? 1 : 4);
  }
 const { data, isLoading, error, getAllProjects } = useFindProjects(paginationLimit);
  useEffect(() => {
    getAllProjects(paginationLimit);
  }, [paginationLimit])
  window.onresize = changePagination;
 
  const projectsArr = data;
  const render = () => {
    if (isLoading) {
      return <Loader />;
    } else if (data && !isLoading) {
      return (
        <div className={style.galleryPaginationBox}>
          <div className={style.galleryBox}>
            <div className={style.chevron}>
              <ArrowBackIosNew />
              <span className={style.xsmallScreens}> Précédent </span>
            </div>
            <Grid container rowSpacing={3} className={style.cardsGrid}>
              {projectsArr.map((element: any, index: number) => {
                return (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    xl={3}
                    className={style.cardsGrid__cell}
                    paddingLeft={0}
                    key={uuidv4()}
                  >
                    <div className={style.card}>
                      <div className={style.card__imgContainer}>
                        <a href={`/project/${element["project-id"]}`}>
                          <img
                            src={element.miniature}
                            alt={element["miniature-alt"]}
                            className={
                              index % 2 === 0
                                ? `${style.card__miniature}`
                                : `${style.card__miniature} ${style.card__toRight}`
                            }
                          />
                        </a>
                      </div>
                      <div
                        className={`${style.card__projectLabel} ${style.card__projectLabelGold}`}
                      >
                        <h2 className={style.card__projectTitle}>
                          {element["project-name"]}
                        </h2>
                        <p className={style.card__projectDescription}>
                          {element["short-description"]}
                        </p>
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
            <div className={style.chevron}>
              <span className={style.xsmallScreens}>Suivant</span>
              <ArrowForwardIos />
            </div>
          </div>
          <Pagination />
        </div>
      );
    } else if (error) {
      return (
        <div className={style.titleBox}>
          <h1>Something went wrong ... </h1>
        </div>
      );
    }
  };

  return <section className={style.gallery}>{render()}</section>;
}

export default Gallery;
