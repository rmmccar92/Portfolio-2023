"use client";

import type { FC, FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import styles from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formState);
    const { name, email, message } = formState;
    if (name !== "" && email !== "" && message !== "") {
      const serviceId = "service_3oukn1q";
      const templateId = "template_5jwiz6m";
      const userId = "user_7wTqyhOq9QPQ2coZfDyp9";
      const templateParams = {
        name,
        email,
        message,
      };

      try {
        const response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          userId
        );
        console.log("Success", response);
      } catch (err) {
        console.log("Error", err);
      }
    } else {
      return;
    }
  };

  return (
    <div className={styles.contactMain}>
      <h1>Contact</h1>
      <div className={styles.contactContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" onChange={handleChange} />
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
