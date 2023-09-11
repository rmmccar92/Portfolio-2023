import type { FC } from "react";
import Image from "next/image";
import styles from "../styles/Project.module.css";

interface ProjectsProps {
  selectedProject: any;
}

const Projects: FC<ProjectsProps> = ({ selectedProject }) => {
  return (
    <div className={styles.projectContainer}>
      <h1>{selectedProject.title}</h1>
      <div className={styles.projectImage}>
        <Image
          width={500}
          height={500}
          className={`${styles[selectedProject.alt]} ${styles.projectImage}`}
          src={selectedProject.image}
          alt={selectedProject.alt}
        />
      </div>
    </div>
  );
};
export default Projects;
