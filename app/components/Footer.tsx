import type { FC } from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialIcon}>
        <li className={styles.socialIconItem}>
          <a
            className={styles.socialIconLink}
            href="https://github.com/rmmccar92"
          >
            <Image
              width={35}
              height={35}
              alt="github"
              src="/images/technologies/github.png"
            />
          </a>
        </li>
        <li className={styles.socialIconItem}>
          <a
            className={styles.socialIconLink}
            href="https://www.linkedin.com/in/ryan-mccarthy-20950291/"
          >
            <Image
              width={35}
              height={35}
              alt="linkedin"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            />
          </a>
        </li>
      </ul>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="#">
            Home
          </a>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="#">
            About
          </a>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="#">
            Services
          </a>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="#">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;2023 Ryan McCarthy</p>
    </footer>
  );
};
export default Footer;
