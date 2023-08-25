import type { FC } from "react";
import styles from "../styles/navbar.module.css";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className={styles.navMain}>
      <div className={styles.navLeft}>
        {/* <div className={styles.navLogo}>Logo</div> */}
        <h2 className={styles.navName}>Ryan McCarthy</h2>
      </div>
      <div className={styles.navLinks}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        <div className={styles.menu}> Test Content</div>
      </div>
    </div>
  );
};
export default Navbar;
