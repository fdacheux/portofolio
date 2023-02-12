import style from "./About.module.scss"
import PagesTitle from "../../components/PagesTitle";
import UnderConstruction from "../../components/UnderConstruction";

function About() {
    return (
        <main className={style.about}>
            <PagesTitle title="À propos" />
            <UnderConstruction />
        </main>
    )
    
}

export default About;