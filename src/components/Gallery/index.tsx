import style from "./Gallery.module.scss";
import { Grid } from "@mui/material";
import Loader from "../../components/Loader";
import Pagination from "../Pagination/PageNumbers";
import { v4 as uuidv4 } from "uuid";
import { useCallback, useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../utils/context/projects.context";
import Chevron from "../Pagination/Chevrons";

function Gallery() {
  const { projects, isLoading, error, setLimit} = useContext(ProjectsContext);
  const [windowWidth, setWindowSize] = useState(window.screen.width);

  const changePagination = useCallback(() => {
    setWindowSize(window.screen.width);
    setLimit(windowWidth < 768 ? 1 : 4);
  },[windowWidth, setLimit]);

  window.onresize = changePagination;

  useEffect(() => changePagination(), [changePagination]) 

  const projectsArr = projects;
  const render = () => {
    if (isLoading) {
      return <Loader />;
    } else if (projects && !isLoading) {
      return (
        <div className={style.galleryPaginationBox}>
          <div className={style.galleryBox}>
            <Chevron isLeftChevron={true} />
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
            <Chevron isLeftChevron={false} />
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
