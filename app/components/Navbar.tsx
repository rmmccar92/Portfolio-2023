import type { FC } from "react";
import styles from "../styles/navbar.module.css";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className={styles.navMain}>
      <div className={styles.navLeft}>
        <div className={styles.navLogo}>Logo</div>
        <h2 className={styles.navName}>Ryan McCarthy</h2>
      </div>
      <div className={styles.navLinks}>Links</div>
    </div>
  );
};
export default Navbar;
