import type { FC } from "react";
import styles from "../styles/Contact.module.css";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className={styles.contactMain}>
      <h1>Contact</h1>
    </div>
  );
};
export default Contact;
