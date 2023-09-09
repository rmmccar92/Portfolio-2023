import type { FC } from "react";
import styles from "../styles/Contact.module.css";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className={styles.contactMain}>
      <h1>Contact</h1>
      <div className={styles.contactContainer}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
