import style from "./Loader.module.scss";

function Loader() {
    return (
        <div className={style.loaderContent}>
            <div className={style.loader}>
                <p>Loading...</p>
            </div>
        </div>
    );

}

export default Loader;