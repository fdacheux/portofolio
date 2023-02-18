import style from "./PagesTitle.module.scss"

interface IPageTitle {
    title: string;
}

const PagesTitle = ({ title } : IPageTitle) => {
    return (
        <div className={`${style.titleBox} ${style.goldenPlaque}`}>
          <h1 className={style.titleBox__text}>{title}</h1>
        </div>
    )
}

export default PagesTitle ;