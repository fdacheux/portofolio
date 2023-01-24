import style from "./Footer.module.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        You can find more about my project or about me :
        <a
          href="https://github.com/fdacheux"
          aria-label="Click to see my github account"
          className={style.footer__link}
        >
          <GitHubIcon className={style.socialIcon} />
        </a>
        <a
          href="https://github.com/fdacheux"
          aria-label="Click to see my linkedin"
          className={style.footer__link}
        >
          <LinkedInIcon className={style.socialIcon} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
