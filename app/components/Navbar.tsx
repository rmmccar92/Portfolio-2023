import type { FC } from "react";
import styles from "../styles/navbar.module.css";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className={styles.navMain}>
      <h1>Navbar</h1>
    </div>
  );
};
export default Navbar;
