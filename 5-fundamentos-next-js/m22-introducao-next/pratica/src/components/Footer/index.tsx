import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>Projeto criado por <a href="https://github.com/gabriellysaless" target="_blank" rel="noopener noreferrer"><FaGithub/> @gabriellysaless</a></p>
        </footer>
    )
}

export default Footer;